pipeline {
    agent any

    stages {
        stage("build"){
            steps {
                echo "heyy "
                // ls
                shell "chmod +x ./jenkins/build.sh"
                shell "./jenkins/build.sh"
            }
        }
        stage("test"){
            steps {
                // cd jenkins
                // ls
                shell "chmod +x ./jenkins/test.sh"
                shell "./jenkins/test.sh"
            }
        }
        stage("deploy"){
            steps {
                shell 'chmod +x ./jenkins/deploy.sh'
                shell './jenkins/deploy.sh'
            }
        }
    }
}