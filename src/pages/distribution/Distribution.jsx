import './Distribution.css'
import React, { useState, useEffect, useRef } from "react"
import * as eCharts from "echarts"
import D_Data from './D_Data'
import 'echarts/extension/bmap/bmap'
import geoJson from './China.json'

export default function Distribution(){
  const chartMapRef = useRef(null)
  useEffect(() => {
    // 初始化ECharts实例
    const chart = eCharts.init(chartMapRef.current);
  
    // 注册地图数据
    eCharts.registerMap('China', geoJson);

    const ChinaMapData = [
      { name: '西藏自治区', value: 47 },
      { name: '上海市', value: 4 },
      { name: '福建省', value: 92 },
      { name: '广西壮族自治区', value: 78 },
      { name: '广东省', value: 384 },
      { name: '山西省', value: 46 },
      { name: '云南省', value: 160 },
      { name: '海南省', value: 49 },
      { name: '辽宁省', value: 105 },
      { name: '吉林省', value: 51 },
      { name: '宁夏回族自治区', value: 14 },
      { name: '江西省', value: 200 },
      { name: '青海省', value: 11 },
      { name: '内蒙古自治区', value: 182 },
      { name: '四川省', value: 169 },
      { name: '陕西省', value: 60 },
      { name: '重庆市', value: 57 },
      { name: '江苏省', value: 31 },
      { name: '贵州省', value: 124 },
      { name: '北京市', value: 20 },
      { name: '新疆维吾尔自治区', value: 31 },
      { name: '浙江省', value: 37 },
      { name: '山东省', value: 88 },
      { name: '甘肃省', value: 60 },
      { name: '天津市', value: 8 },
      { name: '河南省', value: 33 },
      { name: '黑龙江省', value: 250 },
      { name: '河北省', value: 45 },
      { name: '湖南省', value: 128 },
      { name: '安徽省', value: 106 },
      { name: '湖北省', value: 80 }, 
      { name: '台湾省', value: 92 }, 
      { name: '香港特别行政区', value: 24 },
      { name: '澳门特别行政区', value: 0 },
  ];
  
    // 配置图表选项
    const option = {
      title: {
        text: '全国各省市自然保护区数量',
        top:'top',
        left:'center'
        // subtext: 'Data source',
        // sublink: 'http://example.com/data-source-url'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{b}<br/>{c} 个'
      },
      toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
          dataView: { readOnly: false },
          // restore: {},
          // saveAsImage: {}
        }
      },
      visualMap: {
        min: 0,
        max: 400,
        text: ['High', 'Low'],
        realtime: false,
        calculable: true,
        // left:'15%',
        // top: 'center',
        inRange: {
          color: ['lightskyblue', 'yellow', 'orangered']
        }
      },
      series: [
        {
          name: '自然保护区数量',
          type: 'map',
          map: 'China',
          zoom: 1.25, // 放大地图，值越大，地图显示越大
          // center: [104.5, 38], // 调整地图中心位置，可以使地图在容器中居中显示
          label: {
            show: true
          },
          data: ChinaMapData
        }
      ]
    };

    // 设置图表尺寸
    chart.resize();
  
    // 设置图表选项
    chart.setOption(option);
    // 当组件卸载时，销毁图表实例
    return () => {
      chart.dispose();
    };
  }, []);
  
  return(
    <div className='dis-contain'>
      {/* <h1>全国各省市自然保护区数量</h1> */}
      <div 
        ref={chartMapRef}
        style={{ width: '100vw', height: '90vh' }} 
        className='map-dis'
      >
      </div>
    </div>
  )
}