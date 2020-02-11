<template>
  <div id="datashow">
    <div style="display: inline; float: left; width: 48%; border: #3b4151 solid 1px">
      <div>
        <h2 class='dataTitle'>车内环境情况</h2>
        <ve-line :data="chartData"
                 :extend="chartExtend"
                 height="400px"></ve-line>
      </div>

    </div>
    <div style="display: inline;float: right; width: 48%; border: #3b4151 solid 1px">
      <h2 class='dataTitle'>车辆类型统计</h2>
      <ve-pie :data="chartData1"
              :extend="chartExtend"
              height="400px"></ve-pie>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DataShow',
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
        columns: ['日期', '温度', '湿度'],
        rows: [
          { '日期': '1/1', '温度': 23, '湿度': 78 },
          { '日期': '1/2', '温度': 24, '湿度': 75 },
          { '日期': '1/3', '温度': 25, '湿度': 88 },
          { '日期': '1/4', '温度': 33, '湿度': 86 },
          { '日期': '1/5', '温度': 35, '湿度': 100 },
          { '日期': '1/6', '温度': 25, '湿度': 66 }
        ]
      },
      chartData1: {
        columns: ['车辆类型', '车辆数量'],
        rows: [
          { '车辆类型': '货车', '车辆数量': 30 },
          { '车辆类型': '轿车', '车辆数量': 66 },
          { '车辆类型': '客车', '车辆数量': 20 },
          { '车辆类型': '卡车', '车辆数量': 12 }
        ]
      }

    }
  }

}
</script>
<style>
#datashow {
  width: 100%;
  height: 100%;
  background-image: url("../assets/images/nybj.png");
}
.dataTitle {
  color: rgb(247, 246, 250);
}
</style>
