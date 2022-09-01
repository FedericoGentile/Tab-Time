var d = new Date().getTime() - performance.timing.navigationStart; 
alert(Math.floor(d/(24*60*60*1000))+" days, "+new Date(d).toISOString().substr(11,8))



