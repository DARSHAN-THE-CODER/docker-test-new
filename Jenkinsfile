pipeline {
    agent any

    stages {
        stage("build"){
            steps {
                echo "heyy "
                // ls
                sh "chmod +x ./jenkins/build.sh"
                sh "./jenkins/build.sh"
            }
        }
        stage("test"){
            steps {
                // cd jenkins
                // ls
                sh "chmod +x ./jenkins/test.sh"
                sh "./jenkins/test.sh"
            }
        }
        stage("deploy"){
            steps {
                sh 'chmod +x ./jenkins/deploy.sh'
                sh './jenkins/deploy.sh'
            }
        }
    }
}