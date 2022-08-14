<script>
import SvgIcon from "./SvgIcon.vue";
import {urls, homeAddress} from "../../assets/urls";

export default {
  components: {SvgIcon},
  data() {
    return {
      homeSvg:
          '<svg t="1659970448935" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6078" data-spm-anchor-id="a313x.7781069.0.i14" width="24" height="24"><path d="M426.666667 853.333333l0-256 170.666667 0 0 256 213.333333 0 0-341.333333 128 0-426.666667-384-426.666667 384 128 0 0 341.333333z" p-id="6079" fill="#515151"></path></svg>',
      mailSvg:
          '<svg t="1659970485307" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7071" width="24" height="24"><path d="M512 576a32 32 0 0 1-17.184-4.992L128 337.568v430.656A64 64 0 0 0 192.064 832h639.872A64 64 0 0 0 896 768.224V337.888l-366.816 233.12A32.096 32.096 0 0 1 512 576" p-id="7072" fill="#515151"></path><path d="M831.936 192H192.064A64 64 0 0 0 128 255.808v4.896l384 245.376 384-244.032v-6.24A64 64 0 0 0 831.936 192" p-id="7073" fill="#515151"></path></svg>',
      githubSvg:
          '<svg t="1659862599249" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9963" width="24" height="24"><path d="M938.666667 512a426.666667 426.666667 0 0 1-291.84 404.48 22.186667 22.186667 0 0 1-19.2-2.986667 21.76 21.76 0 0 1-8.96-17.493333v-113.92a170.666667 170.666667 0 0 0-21.333334-87.893333 10.666667 10.666667 0 0 1 0-11.52 11.52 11.52 0 0 1 8.533334-5.973334c104.106667-10.666667 162.133333-52.053333 162.133333-164.693333a200.96 200.96 0 0 0-50.773333-143.36 183.466667 183.466667 0 0 0 8.106666-51.2 184.746667 184.746667 0 0 0-6.4-46.08 20.906667 20.906667 0 0 0-22.613333-15.36 189.866667 189.866667 0 0 0-104.106667 50.346667 422.826667 422.826667 0 0 0-160.426666 0A189.866667 189.866667 0 0 0 327.68 256a20.906667 20.906667 0 0 0-22.613333 15.36A184.746667 184.746667 0 0 0 298.666667 317.44a183.466667 183.466667 0 0 0 8.106666 51.2A200.96 200.96 0 0 0 256 512c0 118.613333 64.426667 158.293333 182.613333 168.106667a158.293333 158.293333 0 0 0-29.44 65.28v5.12a29.013333 29.013333 0 0 0 0 5.973333 25.173333 25.173333 0 0 1-27.306666 21.76 42.666667 42.666667 0 0 1-18.346667-5.12 227.84 227.84 0 0 1-60.586667-53.76 430.506667 430.506667 0 0 0-34.133333-34.56 116.906667 116.906667 0 0 0-25.173333-16.64 20.906667 20.906667 0 0 0-20.48 0 21.333333 21.333333 0 0 0-9.813334 17.92v2.56a21.333333 21.333333 0 0 0 9.813334 17.92 193.706667 193.706667 0 0 1 39.253333 44.8 282.026667 282.026667 0 0 0 67.84 73.386667 105.813333 105.813333 0 0 0 59.733333 17.92h15.36V896a21.76 21.76 0 0 1-8.96 17.493333 22.186667 22.186667 0 0 1-19.2 2.986667A426.666667 426.666667 0 1 1 938.666667 512z" p-id="9964" fill="#515151"></path></svg>',
      telegram:
          '<svg t="1659874720516" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12285" width="24" height="24"><path d="M957.4 197.2l-135.2 637.6c-10.2 45-36.8 56.2-74.6 35l-206-151.8-99.4 95.6c-11 11-20.2 20.2-41.4 20.2l14.8-209.8 381.8-345c16.6-14.8-3.6-23-25.8-8.2L299.6 568 96.4 504.4c-44.2-13.8-45-44.2 9.2-65.4L900.4 132.8c36.8-13.8 69 8.2 57 64.4z" p-id="12286" fill="#515151"></path></svg>',
    };
  },
  methods: {
    gotoHome() {
      const addr = homeAddress();
      window.location.href = addr;
    },
    sendEmail() {
      const addr = urls.emailAddress;
      window.location.href = `mailto:${addr}`;
    },
    gotoGitHub() {
      window.open(urls.githubHome);
    },
    telegramMe() {
      const userName = urls.telegramUserName;
      window.open(`https://telegram.me/${userName}`);
    },
  },
};
</script>

<template>
  <div class="links_container">
    <svg-icon :svg="homeSvg" @click="gotoHome"></svg-icon>
    <svg-icon :svg="telegram" @click="telegramMe"></svg-icon>
    <svg-icon :svg="mailSvg" @click="sendEmail"></svg-icon>
    <svg-icon :svg="githubSvg" @click="gotoGitHub"></svg-icon>
  </div>
</template>

<style scoped lang="scss">
.links_container {
  display: flex;
  column-gap: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
</style>