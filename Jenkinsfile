pipeline {
    agent any

    stages {
        stage("build"){
            steps {
                // ls
                sh "chmod +x general.sh"
                sh "./general.sh Build"
            }
        }
        stage("test1"){
            steps {
                echo "testt "
            }
        }
        stage("test"){
            steps {
                // cd jenkins
                // ls
                sh "chmod +x general.sh"
                sh "./general.sh Test"
            }
        }
        stage("deploy"){
            steps {
                sh "chmod +x general.sh"
                sh "./general.sh Deploy"
            }
        }
    }
}