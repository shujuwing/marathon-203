


document.querySelectorAll('.tab-trigger').forEach(trigger => {

    trigger.addEventListener('click', () => {


        document.querySelectorAll('.tab-trigger').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));


        trigger.classList.add('active');
        document.getElementById(trigger.getAttribute('data-target')).classList.add('active');
    });
    
});