# Installation

### CDN
```javascript
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
```


### Create a Vue App
Create a file named 'main.js' and add the following code:
```javascript
const app = Vue.createApp({
    data () {
        return {
            variavel: 'Hello,',
            variavel2: 'World!'
        }
    }
});
```
Import the file in the HTML:
```javascript
<script src="main.js"></script>
```
Now that we created the app, we need to mount it to the HTML:
```javascript
<script>
    const mountedApp = app.mount('#app')
</script>
```
And finally, we need to create a div with the id 'app' in the HTML:
```html
<div id="app">
    <p>
        {{ variavel + variavel2 }}
    </p>
</div> 
```
The result will be:
```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Vue</title>
</head>
<body>

<div id="app">
    <p>
        {{ variavel + variavel2 }}
    </p>
</div>

<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script src="main.js"></script>
<script>
    const mountedApp = app.mount('#app')
</script>

</body>
</html>
```