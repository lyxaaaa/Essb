import React,{useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import './index.css'
import LogoTitle from '../../imgs/logoTitle.png'
import LoadingTitle from '../../imgs/loadingTitle.png'

export default function Loading() {
    const navigate = useNavigate();
    const [isLoading,setIsLoading] = useState(true)
    const [progress, setProgress] = useState(0);

    const ToOpen = () => {
        navigate('/open')
    }

    useEffect(() => {
        const interval = setInterval(() => {
        setProgress((prevProgress) => {
            if (prevProgress >= 100) {
            clearInterval(interval);
            setIsLoading(false)
            return 100;
            }
            return prevProgress + 1;
        });
        }, 60); // 100ms的间隔时间，可以根据需要调整
        return () => {
        clearInterval(interval);
        };
    }, [])

  return (
    <div className='load-contain'>
        <div className="load-main">
            <div className="loadmain-one">
                <img src={LogoTitle} alt="" className='load-img'/>
            </div>
            <div className="loadmain-two">
                <div className="loadtwo-word">{progress}%</div>
            </div>
            <div className="loadmain-three">
                {isLoading ? 
                    (<div className='loading-title'>
                        <img src={LoadingTitle} alt="" className='load-img'/>
                    </div>) 
                    : 
                    (<button className='load-btn' onClick={ToOpen}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ marginRight: '8px' }}>
                            <path fill="#c8e2fe" d="M2.8 8.4L21.6 0 14 11.8 22 21.6 2.8 16.4z"/>
                        </svg>
                        ENTER
                    </button>)
                }
            </div>
        </div>
    </div>
  )
}
