const themeToggleBtn = document.getElementById('theme-toggle')
const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon')
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon')


// dark mode / light mode toggle
if (
  localStorage.getItem('color-theme') === 'dark' ||
  (!('color-theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  themeToggleLightIcon.classList.remove('hidden')
} else {
  themeToggleDarkIcon.classList.remove('hidden')

}

//listen for toggle click

themeToggleBtn.addEventListener('click', toggleMode)

function toggleMode () {
  //  Toggle icon 
  themeToggleDarkIcon.classList.toggle('hidden')
  themeToggleLightIcon.classList.toggle('hidden')

  //if mode is set in local storage
  if(localStorage.getItem('color-theme')) {
    //if light, then turn on dark and save to local storage
    if(localStorage.getItem('color-theme') === 'light'){
      document.documentElement.classList.add('dark')
      localStorage.setItem('color-theme', 'dark')
    }else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('color-theme', 'light')
      }
      
    }else {
      //if not in local storage
      if(document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('color-theme', 'light')
        
      }else {
        document.documentElement.classList.add('dark')
      localStorage.setItem('color-theme', 'dark')

      }
  }
}