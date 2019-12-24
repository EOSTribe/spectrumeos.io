
$(document).ready(function(){
	
	//////////////////////////////////////////////////////////
	
	// ANIMATION JS

	//////////////////////////////////////////////////////////

	
	let specaObjectsChains = document.querySelectorAll('.speca-objects__chain');
	let specaObjectsClient = document.querySelector('.speca-objects__client');
	let specaRoadsChainPlaces = document.querySelectorAll('.speca-roads__chain-place');
	let specaRoadsChainDots = document.querySelectorAll('.speca-roads__chain-dot');
	let bgObjectsCard = document.querySelector('.bg-objects__card');
	let bgObjectsCartWrapper = document.querySelector('.bg-objects__cart-wrapper');
	let bgObjectsCalculator = document.querySelector('.bg-objects__calculator');
	let specaBrowser = document.querySelector('.speca-browser');

	function animate(item){
		console.log('animate');
		console.log(item);
		item.classList.add('animated');
	}
	
	function unanimate(item){
		console.log('unanimate');
		console.log(item);
		item.classList.remove('animated');
    }
    
    
	function animationIteration(){
        console.log('interval');
        setTimeout(() => {
            animate(specaObjectsChains[4]);
        }, 29500);
        setTimeout(() => {
            unanimate(specaObjectsChains[4]);
        }, 500);
        setTimeout(() => {
            animate(specaObjectsChains[2]);
        }, 4500);
        setTimeout(() => {
            unanimate(specaObjectsChains[2]);
        }, 5500);
        setTimeout(() => {
            animate(specaObjectsChains[5]);
        }, 9500);
        setTimeout(() => {
            unanimate(specaObjectsChains[5]);
        }, 10500);
        setTimeout(() => {
            animate(specaObjectsChains[0]);
        }, 14500);
        setTimeout(() => {
            unanimate(specaObjectsChains[0]);
        }, 15500);
        setTimeout(() => {
            animate(specaObjectsChains[3]);
        }, 19500);
        setTimeout(() => {
            unanimate(specaObjectsChains[3]);
        }, 20500);
        setTimeout(() => {
            animate(specaObjectsChains[1]);
        }, 24500);
        setTimeout(() => {
            unanimate(specaObjectsChains[1]);
        }, 25500);
        animate(specaRoadsChainPlaces[4]);
        setTimeout(() => {
            unanimate(specaRoadsChainPlaces[4]);
        }, 1000);
        setTimeout(() => {
            animate(specaRoadsChainPlaces[2]);
        }, 5000);
        setTimeout(() => {
            unanimate(specaRoadsChainPlaces[2]);
        }, 6000);
        setTimeout(() => {
            animate(specaRoadsChainPlaces[5]);
        }, 10000);
        setTimeout(() => {
            unanimate(specaRoadsChainPlaces[5]);
        }, 1100);
        setTimeout(() => {
            animate(specaRoadsChainPlaces[0]);
        }, 15000);
        setTimeout(() => {
            unanimate(specaRoadsChainPlaces[0]);
        }, 1600);
        setTimeout(() => {
            animate(specaRoadsChainPlaces[3]);
        }, 20000);
        setTimeout(() => {
            unanimate(specaRoadsChainPlaces[3]);
        }, 2100);
        setTimeout(() => {
            animate(specaRoadsChainPlaces[1]);
        }, 25000);
        setTimeout(() => {
            unanimate(specaRoadsChainPlaces[1]);
        }, 26000);
        animate(specaRoadsChainDots[4]);
        setTimeout(() => {
            unanimate(specaRoadsChainDots[4]);
        }, 5000);
        setTimeout(() => {
            animate(specaRoadsChainDots[2]);
        }, 5000);
        setTimeout(() => {
            unanimate(specaRoadsChainDots[2]);
        }, 10000);
        setTimeout(() => {
            animate(specaRoadsChainDots[5]);
        }, 10000);
        setTimeout(() => {
            unanimate(specaRoadsChainDots[5]);
        }, 15000);
        setTimeout(() => {
            animate(specaRoadsChainDots[0]);
        }, 15000);
        setTimeout(() => {
            unanimate(specaRoadsChainDots[0]);
        }, 20000);
        setTimeout(() => {
            animate(specaRoadsChainDots[3]);
        }, 20000);
        setTimeout(() => {
            unanimate(specaRoadsChainDots[3]);
        }, 25000);
        setTimeout(() => {
            animate(specaRoadsChainDots[1]);
        }, 25000);
        setTimeout(() => {
            unanimate(specaRoadsChainDots[1]);
        }, 30000);
        setInterval(() => {
            animate(bgObjectsCard);
            setTimeout(() => {
                unanimate(bgObjectsCard);
            }, 2000);
        }, 3000);
        setTimeout(() => {
            setInterval(() => {
                animate(bgObjectsCartWrapper);
                setTimeout(() => {
                    unanimate(bgObjectsCartWrapper);
                }, 2000);
            }, 3000);
        }, 1000);
        setTimeout(() => {
            setInterval(() => {
                animate(specaBrowser);
                setTimeout(() => {
                    unanimate(specaBrowser);
                }, 5000);
            }, 6000);
        }, 2000);
        setTimeout(() => {
            setInterval(() => {
                animate(bgObjectsCalculator);
                setTimeout(() => {
                    unanimate(bgObjectsCalculator);
                }, 6000);
            }, 10000);
        }, 2000);
    }

	function animationCycleStart() {
        console.log('start');
        animate(specaObjectsClient);
        animationIteration();
        setInterval(() => {
            animationIteration();
        }, 30000);
	}

	animate(specaObjectsChains[4]);
	setTimeout(animationCycleStart, 500);
	

	
	
	



	//////////////////////////////////////////////////////////
	
	// ANIMATION JS END

    //////////////////////////////////////////////////////////
});
