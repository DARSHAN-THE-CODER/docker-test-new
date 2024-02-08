pipeline {
    agent any

    stages {
        stage("build"){
            steps {
                bash 'chmod +x ./jenkins/build.sh'
                bash './jenkins/build.sh'
            }
        }
        stage("test"){
            steps {
                bash 'chmod +x ./jenkins/test.sh'
                bash './jenkins/test.sh'
            }
        }
        stage("deploy"){
            steps {
                bash 'chmod +x ./jenkins/deploy.sh'
                bash './jenkins/deploy.sh'
            }
        }
    }
}