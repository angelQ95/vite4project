<template>
    <div>
        <div class="eventBoxWrap">
            <label class="label-event">事件1</label>
            <div class="eventBox">
            </div>
            <label class="label-event">事件2</label>
            <div class="eventBox">
            </div>
            <label class="label-event">事件3</label>
            <div class="eventBox">
            </div>
            <label class="label-event">事件4</label>
            <div class="eventBox">
            </div>
            <label class="label-event">事件5</label>
            <div class="eventBox">
            </div>
        </div>
        <div id="timeslider1" onselectstart="return false;">
            <label class="label-week">星期一:</label>
        </div>

        <div id="timeslider2" onselectstart="return false;">
            <label class="label-week">星期二:</label>
        </div>

        <div id="timeslider3" onselectstart="return false;">
            <label class="label-week">星期三:</label>
        </div>


        <div id="timeslider4" onselectstart="return false;">
            <label class="label-week">星期四:</label>
        </div>


        <div id="timeslider5" onselectstart="return false;">
            <label class="label-week">星期五:</label>
        </div>


        <div id="timeslider6" onselectstart="return false;">
            <label class="label-week">星期六:</label>
        </div>


        <div id="timeslider7" onselectstart="return false;">
            <label class="label-week">星期日:</label>
        </div>

        <br>
        初始化方式：
        <pre class="code">
    &ltdiv id="timeslider1" onselectstart="return false;"&gt
        &ltlabel class="label-week"&gt星期一:&lt/label&gt
    &lt/div&gt
    
    var defaultTime1=['2:9-5:45', '10:8-13:36', '17:34-20:32'];
    var defaultInfos1=[1,2,3];
    var timeS1=new TimeSlider({
        mountedId:'timeslider1',
        language:'cn',
        defaultOneTimeBlockTime:15,
        defaultTime:defaultTime1,
        defaultInfos:defaultInfos      
    });
</pre>
        <p>
            获取星期一时间轴上信息
        </p>
        <button id="getTime">获取</button>
        <p id="content">
        <pre class="code">
timeS1.get()
</pre>
        </p>
        <p>
            重新设置星期一时间轴上信息
        </p>
        <button id="setTime">设置</button>
        <pre class="code">
timeS1.set({
       setTimeArray:['2:9-5:45', '10:8-13:36', '17:34-20:32'],        
       setInfosArray:[4,2]
   })
</pre>
    </div>
</template>

<script setup lang="ts">
import { timeEvent } from "./timeEvent/js/timeSlider";
import { underscore } from "./timeEvent/lib/underscore";
import { onMounted, reactive } from "vue";

let t = { _: null };
underscore.call(t);
timeEvent(t._);
function init() {
    /* 动态创建7个时间轴 */
    var defaultTime1 = ['2:9-5:45', '10:8-13:36', '17:34-20:32'];
    var defaultInfos = [1, 2, 3];
    var timeS1 = new TimeSlider({
        mountedId: 'timeslider1',
        language: 'cn',
        defaultOneTimeBlockTime: 15,
        defaultTime: defaultTime1,
        defaultInfos: defaultInfos
    });

    var timeS2 = new TimeSlider({
        mountedId: 'timeslider2'
    });

    var timeS3 = new TimeSlider({
        mountedId: 'timeslider3'
    });

    var timeS4 = new TimeSlider({
        mountedId: 'timeslider4'
    });

    var timeS5 = new TimeSlider({
        mountedId: 'timeslider5'
    });

    var timeS6 = new TimeSlider({
        mountedId: 'timeslider6'
    });

    var timeS7 = new TimeSlider({
        mountedId: 'timeslider7'
    });



    document.getElementById('getTime').onclick = function () {
        document.getElementById('content').innerHTML = '';
        t._.forEach(timeS1.get().times, function (item, index) {
            var event = timeS1.get().infos[index] + 1;
            var time = '<span>' + item + '</span>&nbsp;<span>事件' + event + '</span></br>';
            document.getElementById('content').innerHTML += time;
        })
    }
    document.getElementById('setTime').onclick = function () {
        timeS1.set({
            setTimeArray: ['2:9-5:45', '10:8-13:36', '17:34-20:32'],
            setInfosArray: [4, 2]
        })
    }

}
onMounted(() => {
    init()
})
</script>

<style scoped>
@import './timeEvent/css/normalize.css';
@import './timeEvent/css/timeSlider.css';

body {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAYAAADEUlfTAAAAG0lEQVQIW2OMqXogyYADMIIkl7QpPMcmP+gkAYLGGdeobP2EAAAAAElFTkSuQmCC);
    user-select: none;
}

.code {
    width: 500px;
    border: 1px solid black;
    background: #d4d4d4;
}
</style>