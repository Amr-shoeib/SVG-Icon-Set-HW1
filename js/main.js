(
    () => {
        console.log('fired java script is working')
        // go and find the elements on the page that you want the user to interact with
        
        // let theBadge = document.querySelector('#png'),
            // thevector = document.querySelector('#vector');

            let theBadges = document.querySelectorAll('svg');

        function logMyId(){
            debugger;
            //log the elements 
            console.log(this.id);
        }
    //    theBadge.addEventListener('click', logMyId);
    //    thevector.addEventListener('click', logMyId);
    theBadges.forEach(badge => badge.addEventListener('click', logMyId));
    })();