import * as eCharts from "echarts"
import React,{ useState, useEffect, useRef } from 'react'
// import { echarts, setOption } from 'echarts.js'
import './index.css'
// import "https://s3.pstatp.com/cdn/expire-1-M/jquery/3.3.1/jquery.min.js"


export default function Influence() {
  const chartRef = useRef(null)
  const chartRefOne = useRef(null)
  const [scene, setScene] = useState('yuanyin')
  const switchScene = (arg) => {
    setScene(arg)
  }


    useEffect(() => {
      if (scene !== 'yuanyin') {
        return;
      }
        // 创建一个 ECharts 实例
        const chartInstance = eCharts.init(chartRef.current);        
        // 设置图表数据和配置
        var pieData = [
            {
                name: '栖息地破坏',
                value: '2000'
            },
            {
                name: '气候变化',
                value: '1800'
            },
            {
                name: '过度捕猎和⾮法贸易',
                value: '2200'
            },
            {
                name: '污染',
                value: '1500'
            },
            {
                name: '入侵物种',
                value: '1300'
            },
            {
                name: '人类活动',
                value: '1600'
            }
            
        ]
        var option = {
            // 注意：饼图不是直角坐标系图表，就不用配置x轴和y轴了
            series: [
                {
                    type: 'pie',
                    data: pieData
                }
            ]
        }       
          // 更新图表数据
          chartInstance.setOption(option);        
          // 在组件卸载时清除图表实例
          return () => {
            chartInstance.dispose();
          };
        },[scene]);

        useEffect(() => {
          if (scene !== 'yingxiang') {
            return;
          }
          // 创建一个 ECharts 实例
          const myChart = eCharts.init(chartRefOne.current);
    
          // 指定图表的配置项和数据
          var option1 = {
        
              title:{
                text:'水生动物',
                // textStyle:{
                //   color:'orange'
                // },
                // borderWidth:5,
                // borderColor:'orange',
                // borderRadius:20,
                // left:150
              },
              tooltip: {
                trigger:'item',
                triggerOn:'click',
                // formatter:'{b}:{c}',
                formatter:function(arg){
                  console.log(arg)
                  return arg.name +'约有'+ arg.data + '余种'
                }
              },
              // legend: {
              //     data:['语文']
              // },
              xAxis: {
                  data: ["鱼类","浮游植物","浮游动物","底栖动物","水生高等植物"]
              },
              yAxis: {},
              series: [{
                  name: '水生动物数量',
                  type: 'bar',
                  data: ['400','1200','700','1000','1000'],
                  color:'#5dac81',
              }],
          };
        
          //使用刚指定的配置项和数据显示图表。
          myChart.setOption(option1);
    
          // 在组件卸载时清除图表实例
          return () => {
            myChart.dispose();
          };
        },[scene]);

  return (
    
    <div className="inf-all">
      
    {scene == "yuanyin"
      ?
    <div className="inf-item">
      <div className='inf-text'>
              <div className="inf-title">什么因素造成濒危物种？</div>
              <div>1.<b> 栖息地破坏：</b>人类活动对自然环境的破坏和破坏栖息地是导致物种濒危的主要原因之⼀。包括森林砍伐、城市化、草原过度放牧、耕地扩张等活动，都对物种的栖息地造成了严重的影响。<br/>
    2. <b>⽓候变化：</b>全球⽓候变化导致生态系统发⽣变化，影响物种的生存和繁殖。⽓候变化可能导致生物栖息地的改变、物种的迁徙和分布变化等，从⽽使得⼀些物种⾯临着濒危的威胁。<br/>
    3. <b>过度捕猎和非法贸易：</b>过度捕猎和非法贸易对某些物种的生存状况造成了严重的威胁，如⼤象、犀牛、虎等。<br/>
    4. <b>污染：</b>⽔、空⽓和⼟壤的污染对⽣物的生存和繁殖造成了威胁酸雨、有毒化学物质、重⾦属等污染物质对物种⽣存环境造成了不可逆转的破坏。<br/>
    5. <b>⼊侵物种：</b>⼊侵物种是指人类活动或其他原因导致的、对原有生物多样性产⽣不利影响的物种，如外来植物、动物等。这些物种可能侵占⽣物栖息地，影响原有物种的⽣存和繁殖。<br/>
    6. <b>⼈类活动：</b>如交通事故、矿山开采、旅游开发等活动对物种的生存造成了影响。</div>
      </div>
    </div>
      :
    <div className="inf-item">
          <div className='inf-text'>
          <div className="inf-title">拯救濒危物种对社会有什么影响？</div>
            <div>1. <b>生态影响：</b>濒危物种往往在生态系统中扮演重要角色，它们可能是授粉者、捕食者、食物来源或者栖息地的构成者。保护濒危物种有助于维持生态系统的平衡和稳定，从⽽维护整个生态环境的健康。<br/>
    2. <b>经济影响：</b>保护濒危物种可能会带来经济效益。例如，保护濒危物种可能有助于发展生态旅游业，吸引游客前来观赏珍稀动植物。此外，⽣物多样性丰富的地区通常具有较⾼的⽣态价值，可能为未来的药物研发、农业发展等领域提供重要资源。<br/>
    3. <b>文化影响</b> 许多濒危物种在不同文化和宗教中具有象征意义，它们可能是⺠间故事、传说或宗教信仰的⼀部分。保护濒危物种有助于保护这些文化和传统，使之得以传承。<br/>
    4. <b>道德影响：</b>保护濒危物种体现了⼈类对⽣命尊重和道德责任的认识。关注濒危物种并采取⾏动拯救它们，有助于提⾼公众对人类行为对环境的影响的认识，并引导社会形成更加可持续的生活方式。<br/>
    5. <b>教育影响：</b>拯救濒危物种的⾏动可以作为生物多样性和环境保护的教育资源，帮助公众了解生态系统的运作原理、物种间的相互依赖关系以及人类活动对环境的影响。这有助于培养公众的环保意识和参与度，从⽽提⾼整个社会的环保素养。</div>
        </div>
    </div>
    }

      <div className="inf-bottom">
        <div className={scene=="yuanyin"?"yuanyin active2":"yuanyin"} onClick={() => switchScene('yuanyin')}>形成原因</div>
        <div className={scene=="yingxiang"?"yingxiang active2":"yingxiang"} onClick={() => switchScene('yingxiang')}>社会影响</div>
      </div>
      <div className="inf-echarts">
        {scene == 'yuanyin'
        ?
        <div className="infchart-contain">
          <div ref={chartRef} style={{ width: '600px', height: '400px' ,backgroundColor:'#f0f7f3'}}></div>
        </div>
        :
        <div className="infchart-contain">
          <div ref={chartRefOne} style={{ width: '600px', height: '400px' ,backgroundColor:'#f0f7f3'}}></div>
        </div>
        }
      </div>
    </div >
  )
}


