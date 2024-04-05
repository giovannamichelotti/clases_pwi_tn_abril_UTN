# Si empezamos desde 0:

    *git init
    *git add .
    *git commit - m 'comentario'
    *git branch -M main 

**Debemos crear un repo en github**

    *git remote add origin https://github.com/giovannamichelotti/clases_pwi_tn_abril_UTN.git
    *git push -u origin main

Listo, con esto tenemos nuetro repo en github con lo que hayamos subido

# Si estoy actualizando: después de hacer ctrol + s (OBVIAMENTE)
    *git add .
    *git commit -m 'comentario´
    *git push

# Aclaraciones:

**Si me equivoqué al poner el git remote, usamos el comando**

    *git remote set-url origin <URL_CORRECTA (https://)>

**Podemos usar git status para obtener información detallada del estado de nuestro repo**

    *git status

**Para ver qué origen remoto tengo usamos:**

    *git remote -v