<template>
  <div>
    <div class="videoLeft">
      <div class="videoFront">
        <el-image :src="srcLeftFront"
                  style="width: 98%; height: 98%"
                  fit="fill ">
          <div slot="placeholder"
               class="image-slot">
            加载中<span class="dot">...</span>
          </div>
        </el-image>
      </div>
      <div class="videoAfter">
        <el-image :src="srcLeftAfter"
                  style="width: 98%; height: 98%"
                  fit="fill">
          <div slot="placeholder"
               class="image-slot">
            加载中<span class="dot">...</span>
          </div>
        </el-image>
      </div>
    </div>
    <div class="videoRight">
      <div class="videoFront">
        <el-image :src="srcRightFront"
                  style="width: 98%; height: 98%"
                  fit="fill">
          <div slot="placeholder"
               class="image-slot">
            加载中<span class="dot">...</span>
          </div>
        </el-image>
      </div>
      <div class="videoAfter">
        <el-image :src="srcRightAfter"
                  style="width: 98%; height: 98%"
                  fit="fill">
          <div slot="placeholder"
               class="image-slot">
            加载中<span class="dot">...</span>
          </div>
        </el-image>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Video',
  data () {
    return {
      srcLeftFront: require('@/assets/images/leftFront.png'),
      srcLeftAfter: require('@/assets/images/leftAfter.png'),
      srcRightFront: require('@/assets/images/rightFront.png'),
      srcRightAfter: require('@/assets/images/rightAfter.png')
    }
  }

}
</script>
<style>
.videoLeft {
  width: 580px;
  height: 580px;
  float: left;
}
.videoRight {
  width: 580px;
  height: 580px;
  float: right;
}
.videoFront {
  width: 98%;
  height: 46%;
  border: #3b4151 solid 5px;
}
.videoAfter {
  width: 98%;
  height: 46%;
  margin-top: 30px;
  border: #3b4151 solid 5px;
}
</style>
