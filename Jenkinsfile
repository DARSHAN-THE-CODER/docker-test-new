pipeline {
    agent any

    stages {
        stage("build"){
            steps{
                sh './jenkins/build.sh'
            }
        }
        stage("test"){
            steps{
                sh './jenkins/test.sh'
            }
        }
        stage("deploy"){
            steps{
                sh './jenkins/deploy.sh'
            }
        }
    }
}