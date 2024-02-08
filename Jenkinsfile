pipeline {
    agent any

    stages {
        stage("build"){
            sh ./jenkins/build.sh
        }
        stage("test"){
            sh ./jenkins/test.sh
        }
        stage("deploy"){
            sh ./jenkins/deploy.sh
        }
    }
}