import * as eCharts from "echarts"
import React,{ useState, useEffect, useRef } from 'react'
// import { echarts, setOption } from 'echarts.js'
import './index.css'
import sourceData from './riverFish.jsx'


export default function Influence() {
  const chartRef = useRef(null)//长江2017—2021年鱼类物种采集数量的空间分布
  const chartRefTun = useRef(null)//长江江豚近年数量变化
  const chartRefAnimal = useRef(null)//浮游动物
  const chartRefPlant = useRef(null)//浮游植物
  const chartRefOne = useRef(null)//2017-2021长江鱼类资源概览
  const chartRefTwo = useRef(null)//休闲渔业调查
  const [scene, setScene] = useState('yuanyin')
  const switchScene = (arg) => {
    setScene(arg)
  }


    useEffect(() => {
      if (scene !== 'yuanyin') {
        return;
      }
        // 创建ECharts 实例
        const chartInstance = eCharts.init(chartRef.current);  
        const myChart = eCharts.init(chartRefOne.current); 
        const chartInstanceAnimal = eCharts.init(chartRefAnimal.current); 
        const chartInstancePlant = eCharts.init(chartRefPlant.current);        
        // 设置图表数据和配置
        var optionRiver = {
          title: {
            text: '长江2017—2021年鱼类物种采集数量的空间分布',
            left: 'center',
            top: 'top',
            textStyle: {
              fontSize: 16
            }
          },       
          legend: {top:'bottom'},
          tooltip: {},
          dataset: {
            dimensions: ['product', 
                        '2017年前有分布记录的物种数',
                        '2017-2021采集到的种类数', 
                        '历史有分布而2017-2021未采集到的物种数',
                        '2017-2021新采集记录到的物种数'],
            source: sourceData
          },
          xAxis: {
            type: 'category',
            axisLabel: {
              interval: 0,
              rotate: 40,
              formatter: function(value) {
                return value;
              }
            }
          },
          yAxis: {},
          series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' },{ type: 'bar' }]
        }     
        var optionAnimal = {
          title: {
            text: '2017—2021长江流域浮游动物',
            left: 'center',
            top: 'top',
            textStyle: {
              fontSize: 16
            }
          },
          tooltip: {
            trigger: 'item'
          },
          legend: {
            top: 'bottom',
            left: 'center'
          },
          series: [
            {
              name: 'Access From',
              type: 'pie',
              radius: ['30%', '60%'],
              avoidLabelOverlap: false,
              itemStyle: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 2
              },
              label: {
                show: false,
                position: 'center',
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: 25,
                  fontWeight: 'bold'
                }
              },
              labelLine: {
                show: false
              },
              data: [
                { value: 135, name: '原生动物' },
                { value: 131, name: '轮虫' },
                { value: 75, name: '枝角类' },
                { value: 86, name: '桡足类' },
                { value: 37, name: '其他' }
              ]
            }
          ]
        }
        var optionPlant = {
          title: {
            text: '2017—2021长江流域浮游植物',
            left: 'center',
            top: 'top',
            textStyle: {
              fontSize: 16
            }
          },
          tooltip: {
            trigger: 'item'
          },
          legend: {
            top: 'bottom',
            left: 'center'
          },
          series: [
            {
              name: 'Access From',
              type: 'pie',
              radius: ['30%', '60%'],
              avoidLabelOverlap: false,
              itemStyle: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 2
              },
              label: {
                show: false,
                position: 'center',
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: 28,
                  fontWeight: 'bold'
                }
              },
              labelLine: {
                show: false
              },
              data: [
                { value: 309, name: '硅藻' },
                { value: 244, name: '绿藻' },
                { value: 102, name: '蓝藻' },
                { value: 95, name: '其他' },
              ]
            }
          ]
        }
        // 指定图表的配置项和数据
        var option1 ={
          color: ['#80FFA5', '#00DDFF','#FF0087', '#FFBF00'],
          title: {
            text: '2017-2021长江鱼类资源概览',
            left: 'center',
            top: 'top',
            padding: [30, 0, 0, 0] // 上, 右, 下, 左
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#6a7985'
              }
            }
          },
          legend: {
            top:'bottom',
            data: ['年均CPUE(kg/船*d)', '鱼类现存资源数量(亿尾)', '资源现存重量(万吨)']
          },
          toolbox: false,
          grid: {
            left: '3%',
            right: '4%',
            bottom: '15%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              boundaryGap: false,
              data: ['全流域', '长江干流', '两湖', '各大支流']
            }
          ],
          yAxis: [
            {
              type: 'value'
            }
          ],
          series: [
            {
              name: '年均CPUE(kg/船*d)',
              type: 'line',
              stack: 'Total',
              smooth: true,
              lineStyle: {
                width: 0
              },
              showSymbol: false,
              areaStyle: {
                opacity: 0.8,
                color: new eCharts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: 'rgb(128, 255, 165)'
                  },
                  {
                    offset: 1,
                    color: 'rgb(1, 191, 236)'
                  }
                ])
              },
              emphasis: {
                focus: 'series'
              },
              data: [7.89,7.86,20.31,5.76]
            },
            {
              name: '鱼类现存资源数量(亿尾)',
              type: 'line',
              stack: 'Total',
              smooth: true,
              lineStyle: {
                width: 0
              },
              showSymbol: false,
              areaStyle: {
                opacity: 0.8,
                color: new eCharts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: 'rgb(0, 221, 255)'
                  },
                  {
                    offset: 1,
                    color: 'rgb(77, 119, 255)'
                  }
                ])
              },
              emphasis: {
                focus: 'series'
              },
              data: [8.86,5.94,2.08,0.83]
            },
            {
              name: '资源现存重量(万吨)',
              type: 'line',
              stack: 'Total',
              smooth: true,
              lineStyle: {
                width: 0
              },
              showSymbol: false,
              areaStyle: {
                opacity: 0.8,
                color: new eCharts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: 'rgb(55, 162, 255)'
                  },
                  {
                    offset: 1,
                    color: 'rgb(116, 21, 219)'
                  }
                ])
              },
              emphasis: {
                focus: 'series'
              },
              data: [12.48,4.23,7.84,0.41]
            },
          ]
        };
        //使用刚指定的配置项和数据显示图表。
        myChart.setOption(option1);
          // 更新图表数据
          chartInstance.setOption(optionRiver);   
          chartInstanceAnimal.setOption(optionAnimal);
          chartInstancePlant.setOption(optionPlant)     
          // 在组件卸载时清除图表实例
          return () => {
            chartInstance.dispose();
            chartInstanceAnimal.dispose();
            chartInstancePlant.dispose();
            myChart.dispose();
          };
        },[scene]);

        useEffect(() => {
          if (scene !== 'yingxiang') {
            return;
          }
          // 创建一个 ECharts 实例
          const chartInstanceTun = eCharts.init(chartRefTun.current);   
          var optionTun = {
            title: {
              text: '长江江豚近年数量变化',
              left: 'center',
              top: 'top',
              textStyle: {
                fontSize: 16
              }
            },
            tooltip: {
              trigger: 'axis',
              formatter: '{b}: {c}'
            },
            xAxis: {
              type: 'category',
              data: ['2006', '2012', '2017', '2022']
            },
            yAxis: {
              type: 'value'
            },
            series: [
              {
                data: [1800, 1045, 1012, 1249],
                type: 'line',
                showSymbol: true,
                emphasis: {
                  scale: true
                }
              }
            ]
          }  
          chartInstanceTun.setOption(optionTun); 

      // 创建一个 ECharts 实例
      const myChartTwo = eCharts.init(chartRefTwo.current);
      // 指定图表的配置项和数据
      var option2 = {
        title: {
          text: '2017年休闲渔业调查',
          left:'center',
          top:'top'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          top:'bottom',
          data: ['垂钓者人数', '年垂钓量(吨)', '年垂钓量在江段资源现存量占比(%)']
        },
        xAxis: {
          type: 'category',
          data: ['长江上游', '三峡库区', '长江中游', '长江下游']
        },
        yAxis: [
          {
            type: 'value',
            name: '人数/垂钓量',
            min: 0,
            max: 7000,
            position: 'left'
          },
          {
            type: 'value',
            name: '年垂钓量占比',
            min: 0,
            max: 10,
            position: 'right',
            axisLabel: {
              formatter: '{value} %'
            }
          }
        ],
        series: [
          {
            name: '垂钓者人数',
            type: 'bar',
            data: [2344, 4764, 4600, 6649]
          },
          {
            name: '年垂钓量(吨)',
            type: 'bar',
            data: [45, 294.7, 171.1, 478.7]
          },
          {
            name: '年垂钓量在江段资源现存量占比(%)',
            type: 'line',
            yAxisIndex: 1,
            data: [8.6, 2, 1.8, 3.6]
          }
        ]
      };
      //使用刚指定的配置项和数据显示图表。
      myChartTwo.setOption(option2);   
          // 在组件卸载时清除图表实例
          return () => {
            myChartTwo.dispose();
            chartInstanceTun.dispose();
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
          <div ref={chartRef} style={{ width: '1000px', height: '400px' ,backgroundColor:'#f0f7f3',margin:'20px 0px'}}></div>
          <div ref={chartRefAnimal} style={{ width: '500px', height: '300px' ,backgroundColor:'#f0f7f3',margin:'20px 0px'}}></div>
          <div ref={chartRefPlant} style={{ width: '500px', height: '300px' ,backgroundColor:'#f0f7f3',margin:'20px 0px'}}></div>
          <div ref={chartRefOne} style={{ width: '1000px', height: '450px' ,backgroundColor:'#f0f7f3',margin:'20px 0px'}}></div>
        </div>
        :
        <div className="infchart-contain">
          <div ref={chartRefTwo} style={{ width: '600px', height: '400px' ,backgroundColor:'#f0f7f3',margin:'20px 0px'}}></div>
          <div ref={chartRefTun} style={{ width: '1000px', height: '400px' ,backgroundColor:'#f0f7f3',margin:'20px 0px'}}></div>
        </div>
        }
      </div>
    </div >
  )
}


