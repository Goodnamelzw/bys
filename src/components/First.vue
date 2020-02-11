<template>
  <div>
    <div class="block">
      <el-carousel height="530px">
        <el-carousel-item v-for="item in imgList"
                          :key="item.id">
          <img :src="item.idView"
               style="width: 100%; height: 98%"
               class="nav_img" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div>
      <el-divider></el-divider>
      <h2>系统开发进度</h2>
      <el-divider></el-divider>
    </div>
    <div class="system">
      <div class="radio">
        排序：
        <el-radio-group v-model="reverse">
          <el-radio :label="true">倒序</el-radio>
          <el-radio :label="false">正序</el-radio>
        </el-radio-group>
      </div>
      <el-timeline :reverse="reverse">
        <el-timeline-item v-for="(activity, index) in activities"
                          :key="index"
                          :timestamp="activity.timestamp">
          {{activity.content}}
        </el-timeline-item>
      </el-timeline>
    </div>

  </div>
</template>
<script>
export default {
  name: 'First',
  data () {
    return {
      imgList: [
        { id: 0, idView: require('@/assets/images/navPhoto1.png') },
        { id: 1, name: '详情', idView: require('@/assets/images/navPhoto2.png') }
      ],
      reverse: true,
      activities: [
        {
          content: '完善内容ing',
          timestamp: '2020-01-05'
        },
        {
          content: '功能测试完成',
          timestamp: '2019-11-22'
        },
        {
          content: '整合完成',
          timestamp: '2019-10-22'
        },
        {
          content: '前端开发完成',
          timestamp: '2019-09-22'
        },
        {
          content: '后端开发完成',
          timestamp: '2019-08-22'
        }, {
          content: '开始开发',
          timestamp: '2019-07-01'
        }, {
          content: '准备阶段',
          timestamp: '2019-06-11'
        }]
    }
  }

}
</script>
<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.system {
  width: 300px;
  background-color: rgb(244, 253, 165);
  margin: 0 auto;
  margin-top: 5px;
}
</style>
