const refs = {
    days:document.querySelector('[data-value="days"]'),
    hours:document.querySelector('[data-value="hours"]'),
    mins:document.querySelector('[data-value="mins"]'),
    secs:document.querySelector('[data-value="secs"]'),
}

class CountdownTimer{
    constructor({targetDate,days,hours,mins,secs}){
        this.date = new Date(targetDate);
        this.days = days;
        this.hours = hours;
        this.mins = mins;
        this.secs = secs;
        this.deltaTime = null;
    }

    timer(){
        setInterval(() =>{
            const currentDate = Date.now();
            this.deltaTime = this.date - currentDate;

            this.markapHandler()
    
        },1000)
    }

    markapHandler(){
        this.days.textContent = Math.floor(this.deltaTime / (1000 * 60 * 60 * 24));
            this.hours.textContent = Math.floor((this.deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            this.mins.textContent = Math.floor((this.deltaTime % (1000 * 60 * 60)) / (1000 * 60));
            this.secs.textContent = Math.floor((this.deltaTime % (1000 * 60)) / 1000);
    }
}



const timer = new CountdownTimer({targetDate:'Februar 25, 2023',
days:refs.days,
hours:refs.hours,
mins:refs.mins,
secs:refs.secs});

timer.timer();
