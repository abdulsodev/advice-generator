let adviceId = document.querySelector('#adviceid'),
    adVice = document.querySelector('#quote')
const btn = document.querySelector('#rolldice')
        // Function to get advice from the API
        async function getAdvice(url) {
            try {
                const url = 'https://api.adviceslip.com/advice'
                let response = await fetch(url);
                let data = await response.json();
                let advice = data.slip;
                adviceId.textContent = advice.id;
                adVice.textContent = advice.advice;
            } catch (error) {
                adVice.textContent = 'Failed to fetch advice';
                adVice.style.color = 'red';
            }
        }

        // generates new advice
        btn.addEventListener('click', getAdvice);
        
        getAdvice();