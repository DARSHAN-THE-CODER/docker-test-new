pipeline {
    agent any

    stages {
        stage("build"){
            steps {
                chmod +x './jenkins/build.sh'
                sh './jenkins/build.sh'
            }
        }
        stage("test"){
            steps {
                chmod +x './jenkins/test.sh'
                sh './jenkins/test.sh'
            }
        }
        stage("deploy"){
            steps {
                chmod +x './jenkins/deploy.sh'
                sh './jenkins/deploy.sh'
            }
        }
    }
}