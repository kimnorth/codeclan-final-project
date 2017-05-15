class TimerLogic {

  constructor(){
    this.total = 60;
  }

  createTimer(){
      setInterval(function(){
        if (this.total > 0){
          this.total--
        }
        else if (this.total === 0){
          return
        }
        console.log(this.total)
      }.bind(this), 1000) 
  }

}

export default TimerLogic;