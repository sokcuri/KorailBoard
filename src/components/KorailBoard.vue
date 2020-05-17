<template>
  <div class="container">
    <div class="header">
      <div class="header-logo left"><KorailLogo /></div>
      <div class="header-title right">{{ title }}</div>
      <div class="header-time left">
        <span class="normal">08:59</span>
        <span class="small">:54</span>
      </div>
      <div class="header-date right">2020년 5월 17일</div>
    </div>
    <div class="content">
      <table class="table">
        <thead class="thead">
          <tr>
            <th class="table-head table-time">출발시간</th>
            <th class="table-head table-dest">행선지</th>
            <th class="table-head table-train">열차명</th>
            <th class="table-head table-platform">타는곳</th>
          </tr>
        </thead>
        <tbody>
          <tr class="row">
            <td class="table-item">09:10</td>
            <td class="table-item">
              <div class="item-destination">순천</div>
              <div class="item-detail">영등포-수원-평택-천안-조치원-신탄-등등</div>
            </td>
            <td class="table-item">무궁화 1441</td>
            <td class="table-item platform">
              <span class="circle-number">3</span>
            </td>
          </tr>
          <tr class="row">
            <td class="table-item">09:16</td>
            <td class="table-item">
              <div class="item-destination">부산</div>
              <div class="item-detail">영등포-수원-평택-천안-조치원-신탄-등등</div>
            </td>
            <td class="table-item"><ITXSaemaeulLogo /> 1003</td>
            <td class="table-item platform">
              <span class="circle-number">8</span>
            </td>
          </tr>
          <tr class="row">
            <td class="table-item"></td>
            <td class="table-item">
              <div class="item-destination"></div>
              <div class="item-detail"></div>
            </td>
            <td class="table-item"></td>
            <td class="table-item platform"></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import 'reflect-metadata';
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';
import KorailLogo from '@/assets/korail_logo.svg';
import ITXSaemaeulLogo from '@/assets/itx_saemaeul_logo.svg';

@Component({
  components: {
    KorailLogo,
    ITXSaemaeulLogo
  }
})
export default class KorailBoard extends Vue {
  @Prop()
  readonly title!: string;

  @Prop({ default: () => null })
  readonly callback!: Function;

  @Prop()
  readonly isRed!: boolean;

  @Prop()
  readonly isReset!: boolean;

  @Prop()
  readonly isdot!: boolean;

  @Prop()
  readonly width!: number;

  @Prop()
  readonly height!: number;

  @Prop()
  readonly backgroundColor!: string;

  @Emit()
  Click(e: Event) {
    this.callback(e);
  }
}
</script>

<style>
html body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background: #ddd;
}
</style>

<style lang="scss" scoped>
@font-face {
  font-family: 'NamyangGothic';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_eight@1.0/Eoe_Zno_L.woff')
    format('woff');
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: 'NamyangGothic';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_eight@1.0/Eoe_Zno_M.woff')
    format('woff');
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: 'NamyangGothic';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_eight@1.0/Eoe_Zno_B.woff')
    format('woff');
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: 'NamyangGothic';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_eight@1.0/Eoe_Zno_EB.woff')
    format('woff');
  font-weight: 900;
  font-style: normal;
}

.container {
  font-family: 'NamyangGothic';
}

.header {
  height: 100%;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background: #006699;
  color: white;
  font-weight: bold;
  padding: 30px 80px 30px 80px;
}
.header > div {
  width: 50%;
}

.left {
  text-align: left;
}

.right {
  text-align: right;
}

.header-time {
  margin: 20px 0 0 0;
  font-size: 2.4rem;
  color: #c6d6c6;
}

.header-time::before {
  content: '현재시간: ';
}

.header-time > .normal {
  font-size: 2.8rem;
}

.header-time > .small {
  font-size: 1.8rem;
}

.header-title {
  font-size: 3.5rem;
}

.header-date {
  margin-top: 30px;
  font-size: 2.8rem;
  color: #c6d6c6;
}

.table {
  margin: 0;
  width: 100%;
  text-align: left;
  table-layout: fixed;
  border-spacing: 0;
}

.thead {
  font-size: 3.25rem;
  background: #5bb2ee;
  color: white;
}

.table-head {
  height: 80px;
  vertical-align: middle;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 30px 0px 30px 80px;
}

.table-time {
  width: 20%;
}

.table-dest {
  width: 40%;
}

.table-train {
  width: 20%;
}

.table-platform {
  width: 20%;
}

.table-item {
  height: 160px;
  font-size: 4rem;
  line-height: 1.3;
  font-weight: bold;
  vertical-align: top;
  padding: 20px 0px 20px 80px;
}

.table-item.platform {
  vertical-align: middle;
  text-align: center;
  padding-left: 50px;
  padding-right: 80px;
}

.item-detail {
  width: 100%;
  font-size: 2.5rem;
  display: block;
  overflow: hidden;
  text-overflow: none;
  white-space: nowrap;
  font-weight: 300;
}

.item-platform {
  border-radius: 50%;
  width: 36px;
  height: 36px;
  padding: 8px;

  background: #fff;
  border: 2px solid #666;
  color: #666;
  text-align: center;
}

.table-item:end {
  background: black;
}

.row:nth-child(odd) {
  background: #bbddee;
}

.row:nth-child(even) {
  background: #99ddff;
}

.circle-number {
  display: block;
  width: 100px;
  height: 100px;
  border-radius: 24px;
  border: 5px solid #3787c3;
  background: white;
  color: #006699;
  font-size: 64px;
  margin-left: 45px;
}

.circle-number:before,
.circle-number:after {
  content: '\200B';
  display: inline-block;
  line-height: 0px;
  padding-top: 50%;
  padding-bottom: 50%;
}
</style>
