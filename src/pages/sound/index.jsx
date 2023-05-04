import React,{useState, useEffect, useRef} from 'react'
import { SoundOutlined } from '@ant-design/icons'
import './index.css'
import CartoonVideo from '../../media/cartoonVideo.mp4'

export default function Sound() {
    const videoRef = useRef(null);
    const [contentVisible, setContentVisible] = useState(false);
    const [muted, setMuted] = useState(true);

    //开场动画，用户点击后出现声音
    useEffect(() => {
        const handleInteraction = () => {
        setMuted(false);
        };
        if (videoRef.current) {
        videoRef.current.addEventListener("click", handleInteraction);
        }
        return () => {
        if (videoRef.current) {
            videoRef.current.removeEventListener("click", handleInteraction);
        }
        };
    }, []);

    //开场画面停留在视频最后一帧时，显示前端元素
        useEffect(() => {
            const video = videoRef.current;       
            const handleVideoEnded = () => {
            setContentVisible(true);
            };        
            video.addEventListener('ended', handleVideoEnded);       
            return () => {
            video.removeEventListener('ended', handleVideoEnded);
            };
        }, []);

    //动物列表
    const animals = [ 
        { name: "熊猫", imageUrl: "https://s2.loli.net/2023/05/03/I684qpDx7bwFYrC.png", soundUrl: "http://www.flagislandwebcam.com/animalsounds/raccoon2.wav"  },
        { name: "金丝猴", imageUrl: "https://s2.loli.net/2023/05/03/VbTecorziPQyU37.png", soundUrl: "http://cd.textfiles.com/10000gp2/500SNDS/10_51B.WAV"  },
        { name: "麋鹿", imageUrl: "https://s2.loli.net/2023/05/03/vYpb1F4e3TOtHP5.png", soundUrl: "http://www.sablemountainoutfitters.com/images/cow_call.wav"  },
        { name: "华南虎", imageUrl: "https://s2.loli.net/2023/05/03/uTfzUOBAr8P7JLF.png", soundUrl: "http://cd.textfiles.com/10000gp2/500SNDS/9_45.WAV" },
        { name: "朱鹮", imageUrl: "https://s2.loli.net/2023/05/03/dqGLKTEJsm62w8C.png", soundUrl: "http://www.fernbank.edu/Birding/bird_sounds/kingfisher.mp3" },
        { name: "长江江豚", imageUrl: "https://s2.loli.net/2023/05/03/htUYc9wVfiGZeqK.png", soundUrl: "http://mrclan.com/fastdl/tfc/sound/baahish.wav"  },
        { name: "北极熊", imageUrl: "https://s2.loli.net/2023/05/03/GHM8B7OADYjEzq5.png", soundUrl: "http://d21c.com/LooneyRon/sounds/1bear.wav"  },
        { name: "扬子鳄", imageUrl: "https://s2.loli.net/2023/05/03/FSgu2keM7AcvslI.png", soundUrl: "http://www.beaniebestbuy.com/sounds/crocodile.wav"  },
        { name: "黑颈鹤", imageUrl: "https://s2.loli.net/2023/05/03/b4tyqSiP58CkGcV.png", soundUrl: "http://www.vogelstimmen.info/Vogelstimmen_GRATIS/Kranich_Grus_grus_R_AMPLE-E047316.mp3"  },
        { name: "中华秋沙鸭", imageUrl: "https://s2.loli.net/2023/05/03/sCvz7MpIf6RrV9K.png", soundUrl: "http://web.tiscali.it/gherda-wolit/versi/anatra1.wav"  },
    ];
    //当前播放的动物声音
    const [playingAnimals, setPlayingAnimals] = useState([]);

    // 播放或停止声音
    const handleAnimalClick = (animal) => {
        console.log(playingAnimals.includes(animal))
        if (playingAnimals.includes(animal)) {
        // 停止声音
        animal.audio.pause();
        setPlayingAnimals(playingAnimals.filter(a => a !== animal));
        } else {
        // 播放声音
        animal.audio = new Audio(animal.soundUrl);
        animal.audio.play();
        setPlayingAnimals([...playingAnimals, animal]);
        }
        console.log(playingAnimals)
    };

    // 当播放的动物发生变化时，监听音频的结束事件
    useEffect(() => {
        playingAnimals.forEach(animal => {
        animal.audio.addEventListener('ended', () => {
            setPlayingAnimals(playingAnimals.filter(a => a !== animal));
        });
        });
        return () => {
        playingAnimals.forEach(animal => {
            animal.audio.removeEventListener('ended', () => {
            setPlayingAnimals(playingAnimals.filter(a => a !== animal));
            });
        });
        };
    }, [playingAnimals]);

    
  return (
    <div className='sou-contain'>
        <video ref={videoRef} className="background-video" autoPlay muted={muted}>
            <source src={CartoonVideo} type="video/mp4" />
        </video>
        {contentVisible ? (
        <div className='sou-content'>
            {animals.map((animal) => (
            <div
            key={animal.name}
            className="animal-box"
            onClick={() => handleAnimalClick(animal)}
            >
            <div className='ani-avatar'><img src={animal.imageUrl} alt={animal.name} className='sou-img'/></div>
            <span className='ani-name'>{animal.name}</span>
            <SoundOutlined style={{ fontSize: '20px'}}/>
            </div>
            ))}
        </div>) : ('')}
    </div>
  )
}
