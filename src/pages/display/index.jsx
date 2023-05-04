import React,{ useState } from 'react'
import './index.css'


export default function Display() {
  
  const [scene, setScene] = useState('shuisheng')
  const switchScene = (arg) => {
    setScene(arg)
    console.log(`Switch to ${arg}.`)
  }
  // $(document).ready(function() {
  //   $("#div").click(function() {
  //     $(this).addClass("active1")
  //   })
  // })
  // const div = docunment.querySelector('div')
  // div.onClick = () => {
    
  // }
  const [content, setContent] = useState('长江流域特有的一种淡水豚，是世界上唯一生活在淡水中的鲸类之一。由于环境污染、捕捞和船舶活动等原因，白鳍豚的数量已经大幅减少。')
  const [imagesrc, setImagesrc] = useState('https://s2.loli.net/2023/04/30/gDf4rE9myPBQWOZ.jpg')
  const [title, setTitle] = useState('白鳍豚')
  const changeWu1 = () => {
    setContent('长江流域特有的一种淡水豚，是世界上唯一生活在淡水中的鲸类之一。由于环境污染、捕捞和船舶活动等原因，白鳍豚的数量已经大幅减少。')
    setImagesrc('https://s2.loli.net/2023/04/30/gDf4rE9myPBQWOZ.jpg')
    setTitle('白鳍豚')
  }
  const changeWu2 = () => {
    setContent('一种仅分布在长江流域的濒危鳄鱼，受到生境破坏、污染和人类活动的影响，数量急剧减少。')
    setImagesrc('https://s2.loli.net/2023/05/01/KgndwWSRp5CjEtf.jpg')
    setTitle('扬子鳄')
  }
  const changeWu3 = () => {
    setContent('长江流域濒临灭绝的物种，曾经是“长江四鱼”之一，由于过度捕捞，数量急剧减少。')
    setImagesrc('https://s2.loli.net/2023/04/30/m3ZLOdre4b2vaWN.jpg')
    setTitle('长江鲥鱼')
  }
  // const changeWu4 = () => {
  //   setContent('kkkkk')
  //   setImagesrc('')
  // }
  const changeWu5 = () => {
    setContent('世界上最濒危的淡水动物之一，也是中国特有的物种。由于水污染、水利工程和过度捕捞等因素的影响，它们的数量已经大幅减少。')
    setImagesrc('https://s2.loli.net/2023/04/30/Yiay8x1WRw4Mcz2.jpg')
    setTitle('长江江豚')
  }
  const changeWu6 = () => {
    setContent('一种大型淡水鱼类，也是长江的重要物种之一。然而，由于过度捕捞、水利工程和水污染等原因，中华鲟已经被列为极度濒危物种。')
    setImagesrc('https://s2.loli.net/2023/04/30/jSZ52DKUJieqwcH.jpg')
    setTitle('中华鲟')
  }
  const changeWu7 = () => {
    setContent('一种大型淡水鱼类，曾经是长江中的主要物种之一。但由于过度捕捞和水利工程等原因，它们的数量已经极度减少，被列为濒危物种。')
    setImagesrc('https://s2.loli.net/2023/05/01/Ii7pQy4Fsuk8EtA.jpg')
    setTitle('长江鲟')
  }
  const changeWu8 = () => {
    setContent('一种受欢迎的食用鱼类，在长江流域非常常见。然而，由于过度捕捞、水污染和水利工程等因素的影响，黄鳝的数量也在减少。')
    setImagesrc('https://s2.loli.net/2023/05/01/iJxSODVHKCPbypW.jpg')
    setTitle('黄鳝')
  }
  const changeWu9 = () => {
    setContent('原产于长江流域的一种濒危鹿类，目前野外种群已经灭绝，仅有少量圈养种群。')
    setImagesrc('https://s2.loli.net/2023/05/01/woVbn4ecOmfkuKC.jpg')
    setTitle('高山麋鹿')
  }
  const changeWu10 = () => {
    setContent('中国的特有物种，主要分布于我国南部和西南部的河流、湖泊、水塘、稻田和湿地等环境中。它们的数量正在减少，主要受到人类活动、栖息地破坏、非法捕猎等因素的影响。')
    setImagesrc('https://s2.loli.net/2023/05/01/JxgfSwiYFAcqnTb.jpg')
    setTitle('中华秋沙鸭')
  }
  // const changeWu11 = () => {
  //   setContent('中国特有的爬行动物，主要分布于长江中下游地区。它们的数量也在减少，目前已被列为国家一级保护动物。长江鳄是一种中型鳄鱼，身长可达3米左右，以鱼类和小型哺乳动物为食。')
  //   setImagesrc('')
  // }
  const changeWu12 = () => {
    setContent('中国特有的爬行动物，主要分布于长江中下游地区。它们的数量也在减少，目前已被列为国家一级保护动物。长江鳄是一种中型鳄鱼，身长可达3米左右，以鱼类和小型哺乳动物为食。')
    setImagesrc('https://s2.loli.net/2023/05/01/h3VmY1UqIiH4RDG.jpg')
    setTitle('长江鳄蜥')
  }
  const changeWu13 = () => {
    setContent('一种珍贵的哺乳动物，主要分布于中国的长江中下游地区。它们是国家一级保护动物，数量非常稀少。长江麝是一种小型的麝类，体长仅有30-40厘米，主要以植物为食。')
    setImagesrc('https://s2.loli.net/2023/05/01/eElwRHXkLNYtAoK.jpg')
    setTitle('长江麝')
  }
  const changeWu14 = () => {
    setContent('一种特殊的哺乳动物，它们被称为“地球的洁净工”，因为它们主要以蚂蚁和白蚁为食，能够清理地面上的虫子和腐肉。穿山甲数量正在急剧减少，主要是因为非法贸易和栖息地破坏。它们被列为国家二级保护动物。')
    setImagesrc('https://s2.loli.net/2023/05/01/amUsD8q6yOMKj2f.jpg')
    setTitle('穿山甲')
  }
  const changeWu15 = () => {
    setContent('中国特有的珍稀物种，主要分布于中国南部的亚热带森林中。它们的数量也在减少，被列为国家一级保护动物。')
    setImagesrc('https://s2.loli.net/2023/05/01/C8tgziYWLnr14Rk.jpg')
    setTitle('中华金丝猴')
  }
  const changeWu16 = () => {
    setContent('一种小型有蹄类动物，生活在中国长江流域地区的山林中，中国国家一级保护动物，也是世界自然保护联盟濒危物种红色名录中的濒危物种。')
    setImagesrc('https://s2.loli.net/2023/05/01/FjSntOweCRgYsi5.jpg')
    setTitle('长江麂子')
  }
  const changeWu17 = () => {
    setContent('一种大型的哺乳动物，主要分布在中国长江流域地区的山林中，也是中国国家一级保护动物，世界自然保护联盟濒危物种红色名录中的濒危物种。长江黑熊食性广泛，可以吃肉和植物，但由于生境破坏、猎杀等因素，数量逐渐减少，受到了极大的威胁。')
    setImagesrc('https://s2.loli.net/2023/05/01/NXtWeCay3zxcgUH.jpg')
    setTitle('长江黑熊')
  }
  const changeWu18 = () => {
    setContent('长江流域特有的珍稀树种，因生境破坏、采伐等原因，野生种群数量较少。')
    setImagesrc('https://s2.loli.net/2023/05/01/kzv3KjobgQsJ6PW.jpg')
    setTitle('水杉')
  }
  const changeWu19 = () => {
    setContent('分布于长江上游的濒危树种，受到森林砍伐和人类活动的影响。')
    setImagesrc('https://s2.loli.net/2023/05/01/tK9lGRZyuMfUHjx.jpg')
    setTitle('白桦')
  }

  // setTimeout(function() {
  //   // IE
  //   if(document.all) {
  //   document.getElementById("#start").click();
  //   }
  //   // 其它浏览器
  //   else {
  //   var e = document.createEvent("MouseEvents");
  //   e.initEvent("click", true, true);
  //   document.getElementById("#start").dispatchEvent(e);
  //   }
  //   }, 0);
//  const state = {
//         dataList: [
//             { name: '这是1111', checked: false, },
//             { name: '这是2222', checked: false, },
//             { name: '这是3333', checked: false, },
//             { name: '这是4444', checked: false, }
//         ]
//     }
// function itemClick(item,index){
//     let list = this.state.dataList;
//     list.forEach(item=>{
//         item.checked = false;
//     })
//     list[index].checked = true;
//     this.setState({
//         dataList:list
//     })
//   }

  return (
    <div className="Demonstration">
      <div className='dem-backimage'>
      <div className="de_container">
        <div className="de_left">
          <div className="xq_box">
            {/* 3d卡片 */}
            <div className="card">
              <img src={`${imagesrc}`} className="cover" />
              <div className="display-back">
                  <div className='display-title'>{title}</div>
                  <div className='display-detail'>{content}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="de_middle">
          {scene == 'shuisheng' ?
            <div className="liebiao">
              {/* {
                    this.state.dataList.map((item, index) => {
                        return (
                            <div className={item.checked ? 'item item-active' : 'item'} key={index} onClick={itemClick(item,index)}>
                                {item.name}
                            </div>
                        )
                    })
                } */}

              <div className="menu_label" tabIndex="1" id="start" checked="checked" onClick={changeWu1}>白鳍豚</div>
              <div className="menu_label" tabIndex="1" onClick={changeWu3}>长江鲥鱼</div>
              {/* <div onClick={changeWu4}>白鹇</div> */}
              <div className="menu_label" tabIndex="1" onClick={changeWu5}>长江江豚</div>
              <div className="menu_label" tabIndex="1" onClick={changeWu6}>中华鲟</div>
              <div className="menu_label" tabIndex="1" onClick={changeWu7}>长江鲟</div>
              <div className="menu_label" tabIndex="1" onClick={changeWu8}>黄鳝</div>
            </div> : ''}
          {scene == 'lusheng' ?
            <div  className="liebiao">
              <div className="menu_label" tabIndex="1" onClick={changeWu9}>高山麋鹿</div>
              <div className="menu_label" tabIndex="1" onClick={changeWu10}>中华秋沙鸭</div>
              <div className="menu_label" tabIndex="1" onClick={changeWu2}>扬子鳄</div>
              {/* <div onClick={changeWu11}>长江鳄</div> */}
              <div className="menu_label" tabIndex="1" onClick={changeWu12}>长江鳄蜥</div>
              <div className="menu_label" tabIndex="1" onClick={changeWu13}>长江麝</div>
              <div className="menu_label" tabIndex="1" onClick={changeWu14}>穿山甲</div>
              <div className="menu_label" tabIndex="1" onClick={changeWu15}>中华金丝猴</div>
              <div className="menu_label" tabIndex="1" onClick={changeWu16}>长江麂子</div>
              <div className="menu_label" tabIndex="1" onClick={changeWu17}>长江黑熊</div>  
            </div> : ''}
          {scene == 'zhiwu' ?
            <div  className="liebiao">
              <div className="menu_label" tabIndex="1" onClick={changeWu18}>水杉</div>
              <div className="menu_label" tabIndex="1" onClick={changeWu19}>白桦</div>
            </div> : ''}
        </div>
        <div className="de_right">
          <div className={scene=="shuisheng"?"shuisheng active":"shuisheng"} onClick={() => switchScene('shuisheng')}>水生动物</div>
          <div className={scene=="lusheng"?"lusheng active":"lusheng"} onClick={() => switchScene('lusheng')}>陆生动物</div>
          <div className={scene=="zhiwu"?"zhiwu active":"zhiwu"} onClick={() => switchScene('zhiwu')}>植物</div>
        </div>
      </div>
      </div>
    </div >
  )
}

