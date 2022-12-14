---
date: 2022-08-22
category:
  - TDD
tag:
  - java
  - TDD
---

# 关于测试驱动开发

这是我个人学习TDD的总结，旨在用一系列的定义来描述我脑海中的TDD框架，通过不断的修改与细化来完善框架。

## TDD在做什么

TDD主张先写测试，后写实现，最后再重构。

先写用例一方面是在实现前明确需求，将需求在用例中先描述出来，避免一开始就咔咔的写代码最后发现不满足需求；另一方面，已经存在的测试用例是已经实现的需求的防火墙，避免新需求的实现或者是问题的修改导致既有的功能不可用；先写用例要求我们的代码必须是可测试的，这就迫使我们尽量写出指责单一，低耦合的代码。

在动手写代码前先将需求拆解为足够小的用户故事（每个用户故事小到能够用一个陈述语句描述），用测试用例去描述每个用户故事。然后逐个去实现，用例通过后就代表实现了一个需求点，可以接着实现下一个，直到所有的用例通过。这里的用例是用代码描述的，他在系统的边界上给系统一个输入验证系统的输出，这里的用例不能窥探系统的内部结构（实际上不建议任何测试去窥探被测试体的内部结构，否则将使得用例与实现耦合，我们期望的是实现和测试分开，这样我们可以不更改用例的情况下重构实现）。





