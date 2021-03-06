
export default class home extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString(),
      hours: '00',
      mins: '00',
      secs: '00',
      timerStart: false,
      enableTimer: true,
      alarmStart: false,
      audio1: '',
      getHourArr: () => {
        let arr = [];
        for(let i = 0; i < 100; i++){
          arr.push(i);
        }
        return arr
      },
      getMinSecArr: () => {
        let arr = [];
        for(let i = 0; i < 60; i++){
          arr.push(i);
        }
        return arr
      },
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleStartClick = this.handleStartClick.bind(this);
    this.countDown = this.countDown.bind(this);
    this.handleSetTimeClick = this.handleSetTimeClick.bind(this);
    this.windowClick = this.windowClick.bind(this);
    };

  /*Re-renders current time and countdown values */
  componentDidMount() {
    this.localTime = setInterval(() => {this.setState({ time: new Date().toLocaleTimeString()})}, 1000);
    this.timerTime = setInterval(this.countDown, 1000);
  }

  /*Clear the intervals to prevent memory leaks*/
  componentWillUnmount(){
    clearInterval(this.localTime)
    clearInterval(this.timerTime)
  }

  /*Sets current time to be refreshed in componentdidMount*/
  todayDate(){
    let today = new Date();
    let dd = String(today.getDate()).padStart(2,'0');
    let mm = String(today.getMonth()).padStart(2,'0');
    let yyyy = today.getFullYear();
    return  mm + '/' + dd + '/' + yyyy;
  };

  /*Corresponds dial value to hours, mins and secs state values*/
  handleClick(e){
    let target = e.target;
    this.setState({[target.name] : target.value.toString().padStart(2,0)})
  }

  /*Start and stop button for timer*/
  handleStartClick(){
    let button = document.getElementById('start-button');
    let hours = this.state.hours;
    let mins = this.state.mins;
    let secs = this.state.secs;

    if(this.state.timerStart === false){
      if (this.state.enableTimer === false){
        this.handleSetTimeClick()
      }
      this.setState({timerStart : true});
      this.setState({alarmStart : true});
      if (hours == 0 && mins== 0 && secs == 0){
        this.setState({alarmStart : false});
      }
      button.style.background = '#A4242F';
      button.innerHTML = 'Stop';
    } else {
      this.setState({timerStart : false})
      button.style.background = '#00A676';
      button.innerHTML = 'Start';
    }
  }

  /*Changes the state values for hours, mins and secs*/
  countDown (){
    let hours = this.state.hours;
    let mins = this.state.mins;
    let secs = this.state.secs;
    let button = document.getElementById('start-button');
    

    if (this.state.timerStart == true && this.state.enableTimer === true){
      if (secs != 0){
        this.setState({secs: (+this.state.secs - 1).toString().padStart(2,0)})
      }
      else if (mins != 0){
        this.setState({mins: (+this.state.mins - 1).toString().padStart(2,0)})
        this.setState({secs: '59'})
      }
      else if (hours != 0 ){
        this.setState({hours: (+this.state.hours - 1).toString().padStart(2,0)})
        this.setState({mins: '59'})
        this.setState({secs: '59'})
      }
      else if(this.state.alarmStart == true){
        this.setState({audio1 : new Audio('./alarm.mp3')});
        this.setState({timerStart : false});
        this.state.audio1.play();
        window.navigator.vibrate(2000);
        button.style.background = '#00A676';
        button.innerHTML = 'Start';
      } else {
        button.style.background = '#00A676';
        button.innerHTML = 'Start';
        this.setState({timerStart : false});
      }
    }
  }

  /*Expands the display box upwards to show the dial options*/
  handleSetTimeClick(){
      let hour = document.getElementById('dial-hour');
      let mins = document.getElementById('dial-min');
      let secs = document.getElementById('dial-sec');
      let button = document.getElementById('start-button');
      let height = document.getElementById('display').offsetHeight;
      this.setState({timerStart: false})

    if (this.state.enableTimer === true){
      this.setState({enableTimer: false})
      hour.style.height = (height*0.2).toString()+'px';
      mins.style.height = (height*0.2).toString()+'px';
      secs.style.height = (height*0.2).toString()+'px';
      button.style.background = '#00A676';
      button.innerHTML = 'Start';
    } else{
      this.setState({enableTimer: true})
      hour.style.height = '0';
      mins.style.height = '0';
      secs.style.height = '0';
    }
  }

  /*Silence alarm and vibration from timer reaching zero*/
  windowClick(){
    if (this.state.audio1 != '' && this.state.alarmStart == true){
      this.setState({alarmStart : false});
      this.state.audio1.pause();
      window.navigator.vibrate(0);
    }
  }

  /*2 functions below add aestetics when choosing dial*/
  hoverColor(e){
    e.target.style.background = '#373337';
    e.target.style.color = 'white';
  }

  hoverOutColor(e){
    e.target.style.background = '#D8B39C';
    e.target.style.color = '#373337';
  }

  render(){
    const timeButton = {
      fontSize: '20px',
      width: '100%',
      background: '#D8B39C',
      outline: 'none',
    };

    const getNumHours = this.state.getHourArr().map((value, i) => <button name = 'hours' key = {i + 'hours'} style = {timeButton} onMouseOver = {this.hoverColor} onMouseOut = {this.hoverOutColor} value = {value} onClick = {this.handleClick}>{value.toString().padStart(2,0)}</button>);
    const getNumMin = this.state.getMinSecArr().map((value, i) => <button name = 'mins' key = {i + 'mins'} style = {timeButton} onMouseOver = {this.hoverColor} onMouseOut = {this.hoverOutColor} value = {value} onClick = {this.handleClick}>{value.toString().padStart(2,0)}</button>);
    const getNumSec = this.state.getMinSecArr().map((value, i) => <button name = 'secs' key = {i + 'secs'} style = {timeButton} onMouseOver = {this.hoverColor} onMouseOut = {this.hoverOutColor} value = {value} onClick = {this.handleClick}>{value.toString().padStart(2,0)}</button>);

    return(
      <div className = 'container' onClick = {this.windowClick}>
        
      {/***Nav Bar***/}

        <div className = 'navbar'>
          <h1 id = 'title'>Simple Countdown Timer</h1>
          <div className = 'flex-container-column'>
              <h2 className = 'heading'>Today's Date: <u>{this.todayDate()}</u></h2>
              <h2 className = 'heading'>Current Time: <u>{this.state.time}</u></h2>  
          </div>
        </div>
        
      {/***Content***/}

        <div id = 'display'>
          <div id = 'timer-wrapper'>
            <div id = 'timer'>
              <div className = 'time-place-holders'>
                <h1 className = 'time-display' onClick = {this.handleSetTimeClick}>{this.state.hours}:</h1>
                <div id = 'dial-hour' className = 'dial-wrapper1'>
                    {getNumHours}
                </div>
                <h1 className = 'description' onClick = {this.handleSetTimeClick}>Hours</h1>
              </div>
              <div className = 'time-place-holders'>
                <h1 className = 'time-display' onClick = {this.handleSetTimeClick}>{this.state.mins}:</h1>
                <div id = 'dial-min' className = 'dial-wrapper1'>
                    {getNumMin}
                </div>
                <h1 className = 'description' onClick = {this.handleSetTimeClick}>Mins</h1>
              </div>
              <div className = 'time-place-holders'>
                <h1 className = 'time-display' onClick = {this.handleSetTimeClick}>{this.state.secs}</h1>
                <div id = 'dial-sec' className = 'dial-wrapper1'>
                    {getNumSec}
                </div>
                <h1 className = 'description' onClick = {this.handleSetTimeClick}>Secs</h1>
              </div>
            </div>
            <button id = 'start-button' onClick = {this.handleStartClick}>Start</button>
          </div>

        {/***Footer***/}

          
        </div>
          <footer>
            <p>&copy; Bryan Wong | 2020</p>
          </footer>

        <style jsx>{`

        /*Id and Class Styling*/

          .container{
            display: flex;
            flex-direction: column;
            flex: 0 0 auto;
            box-sizing: border-box;
            height: 100vh;
          }
            .navbar{
              display: flex;
              min-height: 10vh;
              padding-left: 10px;
              align-items: center;
              background: #373337;
              color: #D8B39C;
              border-bottom: 3px solid #D8B39C;
              flex: 0 0 auto;
            }
              #title{
                font-size: 55px;
                cursor: auto;
              }
              .flex-container-column{
                display: flex;
                flex-direction: column;
                padding: 0 10px 0 10px;
                align-items: center;
                jistify-content: center;
                margin-left: 2%;
                border: solid;
              }
              .heading{
                font-weight: 300;
              }
            #display{
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
              width: 100%;
              background-image: radial-gradient( #F7F9F9 , #E3E7D3, #849483);
              flex: 1 0 auto;
            }
            #timer-wrapper{
              display: flex;
              flex-direction: column;
              min-width: 28%;
              bottom: 33%;
              position: absolute;
              bottom: 33%;
            }
        
              #timer{
                display: flex;
                flex-direction: row;
                text-align: center;
                min-width: 33.33%;
              }
              .time-place-holders{
                display: flex;
                flex-direction: column;
                text-align: center;
              }
              .time-display{
                height: 90%;
                font-size: 160px;
                font-weight: 400;
                background-color: #373337;
                color: #D8B39C;
              }
              .dial-wrapper1{
                display: flex;
                flex-direction: column;
                height: 0px;
                overflow: auto;
                }
              .dial-wrapper1::-webkit-scrollbar{
                display: none;
                }
              .description{
                background-color: #373337;
                color: #D8B39C;
              }
            #start-button{
              width: 100%;
              font-size: 25px;
              height: 32px;
              background: #00A676;
              color: #F7F9F9;
            }

      /*Generic Element Styling*/

          h1:hover{
            cursor: pointer;
          }
          h1:focus{
            outline: none;
            user-select: none;
          }
          h1, h2, p{
            -webkit-user-select: none;  /* Chrome 49+ */
            -moz-user-select: none;     /* Firefox 43+ */
            -ms-user-select: none;      /* No support yet */
            user-select: none;          /* Likely future */   
          }
          footer{
            background: #373337;
            color: #D8B39C;
            border-top: 3px solid #D8B39C;
            font-size: 13px;
            width: 100%;
            position: flex;
            flex: 0 0 35px;
          }
          footer p {
            padding: 5px 0 8px 10px ;
          }
          button{
            outline: none;
          }
          button:focus{
            outline:none;
          }

    /*Responsive Web Design*/

        @media screen and (max-width: 1000px){
          #title{
            font-size: 42px;
          }
          .heading{
            font-size: 18px;
          }

          .time-display{
            font-size: 120px;
          }
          .description{
            font-size: 25px;
          }
          #start-button{
            font-size: 23px;
          }
        }
          @media screen and (max-width: 750px){
            #title{
              font-size: 30px;
            }
            .heading{
              font-size: 15px;
            }
            .flex-container-column{
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }
            .time-display{
              font-size: 120px;
            }
            .description{
              font-size: 25px;
            }
            #start-button{
              font-size: 23px;
            }
            footer{
              font-size: 13px;
            }
          }
          @media screen and (max-width: 575px){
            footer{
              font-size: 13px;
            }
            .navbar{
              flex-direction: column;
              margin: 0;
              padding: 0;
            }
            .flex-container-column{
              margin: 0;
              flex-direction: column;
              margin: 10px 0 10px 0;
              border: none;
            }
          }
          @media screen and (max-width: 450px){
            .container{
              box-sizing: border-box;
            }
            #title{
              font-size: 30px;
            }
            .heading{
              font-size: 15px;
            }
            .time-display{
              font-size: 90px;
            }
            .description{
              font-size: 25px;
            }
            #start-button{
              font-size: 23px;
            }
          }
          @media screen and (max-width: 375px){
            #title{
              font-size: 24px;
            }
            .time-display{
              font-size: 60px;
            }
            .description{
              font-size: 25px;
            }
            #start-button{
              font-size: 20px;
            }
          }
        `}</style>

        <style jsx global>{`
      html,
      body {
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
          Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
          sans-serif;
          display: relative;
      }
      *{
        padding: 0;
        margin: 0;
        border: 0;
        box-sizing: border-box;
      }
    `}</style>
      </div>
    )
  }
} 