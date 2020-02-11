<template>
  <div id="alert">
    <div class="leftdiv">
      <h2 class='dataTitle'>预警信息</h2>
      <div class="alertdiv">
        <ul id="con1"
            ref="con1"
            :class="{anim:animate==true}">
          <li v-for='item in items'
              :key="item">
            {{item.msg}}
          </li>
        </ul>
      </div>
    </div>
    <div class="rightdiv">
      <h2 class='dataTitle'>预警信息统计</h2>
      <ve-histogram :data="chartData"
                    :extend="chartExtend"></ve-histogram>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Alert',
  created () {
    setInterval(this.scroll, 2000)
  },
  data () {
    this.chartExtend = {
      xAxis: {
        axisLabel: {
          show: true,
          textStyle: {
            color: 'white', // 这里是改变字体颜色
            fontSize: 18// 字体大小
          }
        }
      },
      yAxis: {
        axisLabel: {
          show: true,
          textStyle: {
            color: 'white', // 这里是改变字体颜色
            fontSize: 18// 字体大小
          }
        }
      },
      legend: { // 顶部图标
        show: true,
        textStyle: {
          color: 'white', // 这里是改变字体颜色
          fontSize: 15// 字体大小
        }
      }
    }
    return {
      chartData: {
        columns: ['日期', '预警次数'],
        rows: [
          { '日期': '1/1', '预警次数': 10 },
          { '日期': '1/2', '预警次数': 20 },
          { '日期': '1/3', '预警次数': 22 },
          { '日期': '1/4', '预警次数': 11 },
          { '日期': '1/5', '预警次数': 5 },
          { '日期': '1/6', '预警次数': 3 }
        ]
      },
      count: 0,
      animate: false,
      items: [
        { msg: '2019-09-09 15:33 预警信息：车内温度过高' },
        { msg: '2019-09-10 16:44 预警信息：车速过快' },
        { msg: '2019-09-12 15:33 预警信息：有人进入盲区' },
        { msg: '2019-09-12 15:33 预警信息：车内温度过低' },
        { msg: '2019-09-12 15:33 预警信息：有人进入盲区' }
      ]
    }
  },
  methods: {
    scroll () {
      this.animate = true // 因为在消息向上滚动的时候需要添加css3过渡动画，所以这里需要设置true
      setTimeout(() => { //  这里直接使用了es6的箭头函数，省去了处理this指向偏移问题，代码也比之前简化了很多
        this.items.push(this.items[0]) // 将数组的第一个元素添加到数组的
        this.items.shift() // 删除数组的第一个元素
        this.animate = false // margin-top 为0 的时候取消过渡动画，实现无缝滚动
      }, 500)
    }
  }
}
</script>
<style>
#alert {
  width: 100%;
  height: 100%;
  background-image: url("../assets/images/nybj.png");
}
.rightdiv {
  width: 48%;
  height: 85%;
  border: #3b4151 solid 1px;
  float: right;
}
.leftdiv {
  width: 48%;
  height: 85%;
  border: #3b4151 solid 1px;
  float: left;
}
.alertdiv {
  width: 80%;
  height: 85%;
  margin: 0 auto;
  color: rgb(255, 253, 253);
}
.anim {
  transition: all 0.5s;
  margin-top: -30px;
}
</style>
