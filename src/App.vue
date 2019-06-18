<template>
  <div>
    <Chart :styles="chartStyles"/>
    <div id='ch'></div>
  </div>
</template>


<script>

import Chart from './components/Chart.vue'

import $ from 'jquery'

import _ from 'lodash'




export default {
  data () {
    return {
      chartStyles:{
        width:'500px',
        // height:'300px'
      }
    }
  },

  components:{
    Chart 
  },

  methods:{
    foo:()=>{
      // const x = 100
      // const y = 100

      // $('body').style.transform = `translate(${x}px, ${y}px)`;


      var a = _.round(0,10)
      console.log('a', a)

    }
  },

  mounted () {



    // this.foo()
    // var ctx = $('#bar-chart')[0].getContext('2d')




    var circle =  new Konva.Circle({        
          x: 100,
          y: 100,
          radius: 20,
          fill: '#000',
          // visible: (index>0) ? false : true
    })

    // console.log(new Konva)

    var stage = new Konva.Stage({
      width: 500,
      height: 300,
      container: '#ch' // or "#containerId" or ".containerClass"
    });

    var layer = new Konva.Layer();

    
    layer.add(circle)

    stage.add(layer)

    



    //ctx.add(circle)


  }

}


</script>


<style>

body {
  /* background:#000; */
  /* padding:0; */
  /* margin:0; */
}

#ch {
  top:0;
  position:absolute;
  border:1px solid;
}

</style>

