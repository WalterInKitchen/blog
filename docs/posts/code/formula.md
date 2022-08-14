---
date: 2022-08-01
category:
  - code
tag:
  - java
  - algorithm
---

# 实现一个代数公式计算器-后缀表达式应用

需求很简单，给定一个固定的公式**a*(b+c)/100**，我们希望给定不同的变量值，例如a=10，b=1，c=2能计算出期望的结果0.3；

这里用后缀表达式实现这个功能，实现可以分为以下几步：

* 分词：拆分表达式中的不同类型的元素
* 构造后缀表达式
* 将变量替换为真实值
* 运用栈运算计算出表达式的值

## 实现

以下是java版本的实现，[源码地址](https://github.com/WalterInKitchen/formula)：

使用起来很简单：

```java
// 假设:a=10;b=2;c=3;
// 则res为:0.5
BigDecimal res = resolver.resolveResult("a*(b+c)/100", context);
```

只需要引入依赖
```xml
<dependency>
  <groupId>io.github.walterinkitchen</groupId>
  <artifactId>formula</artifactId>
  <version>1.0.5</version>
</dependency>
```
为公式解析器提供context，解析器将从context中查找’变量‘的值
```java
Context context = new Context() {
        @Override
        public BigDecimal getDecimalValueOfIdentifier(String s) {
            switch (s) {
                case "a":
                    return new BigDecimal("10");
                case "b":
                    return new BigDecimal("2");
                case "c":
                    return new BigDecimal("3");
            }
            return null;
        }
    };
    return context;
```
实例化一个公式解析器，传入公式与context得到结果
```java
FormulaResolver resolver = new FormulaResolver();
BigDecimal res = resolver.resolveResult("a*(b+c)/100", context);
System.out.println(res); // res=0.5
```

## 自定义的变量名

```java
// 变量名由至少一个字母组成
"a*(b+c)/100"
"va+vairableB*100"
```

## 变量的值类型

为适应表达式中的不同的运算类型，目前支持两种值类型：Decimal类型,Decimal集合类型；
'+-*/'运算符需要一个Decimal类型的变量，需要在上下文中返回Decimal类型的值

```java
Context context = new Context() {
    // 如果是Decimal类型的值，需要在该方法中返回值
    @Override
    public BigDecimal getDecimalValueOfIdentifier(String s) {
        if (s.equals("a")) {
            return BigDecimal.ZERO;
        }
        return null;
    }
};
```
部分函数需要Decimal集合类型的值，需要在上下文中返回集合类型的值
```java
Context context = new Context() {
    // 如果是结合类型的值，需要在该方法中返回一个集合
    @Override
    public List<BigDecimal> getDecimalListByIdentifier(String identifier) {
        if (identifier.equals("b")) {
            return Arrays.asList(BigDecimal.ONE, BigDecimal.TEN);
        }
        return null;
    }
};
```

## 加减乘除

```java
// 加减乘除支持优先级
"a+b*c" // 先算乘法，再算加法
```

## 括号

```java
// 支持括号，括号内的优先级更高
"(a+b)*c" // 先算加法，再算乘法
```

## 配置精度

默认精度是4，即精确到小数点后4位；如果想自定义精度，可以在"resources"目录下创建"io.formula.properties"文件;
并在文件中写入一行来配置精度

```properties
#等号后面提供一个整数的精度，不支持负数
decimalScale=2
```

## 函数

### 默认支持的函数:

**max,min,avg**
他们都要求括号内为一个变量，且变量类型为Decimal集合类型

```java
"a*max(b)" // a*b中的最大值
```

### 注册自己的函数
实现接口：
io.github.walterinkitchen.formula.function.Function 
提供一个public的无参构造器
为函数提供一个名字：不带括号与空格，仅支持字符组成的函数名

```java
/**
 * 自定义函数
 *
 * @author walter
 * @date 2022/3/20
 **/
public class CustomerFunction implements Function {
    // 一个public的无参构造器
    public CustomerFunction() {
    }

    @Override
    public String getName() {
        // 返回函数盟
        return "customerFunction";
    }

    @Override
    public BigDecimal resolveResult(Operand arg, Context context) throws FormulaException {
        // 实现该方法将参数计算为函数结果返回
        return null;
    }
}

```
最后一步：注册函数
在"resources/META-INF/services"目录下(如果没有该目录，需要先创建该目录)创建文件：”io.github.walterinkitchen.formula.function.Function“
文件中每一行为自定义函数的类的全名

```properties
resources/
├── META-INF
│   └── services
│       └── io.github.walterinkitchen.formula.function.Function //注册文件
```
