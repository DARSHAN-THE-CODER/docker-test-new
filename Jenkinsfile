pipeline {
    agent any

    stages {
        stage("build"){
            steps{
                chmod +x './jenkins/build.sh'
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