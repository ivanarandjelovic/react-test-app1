pipeline {
  agent any
  stages {
    stage('Init') {
      steps {
        echo 'Starting build'
      }
    }
    stage('Build') {
      steps {
        sh 'yarn install'
        sh 'yarn test -- --coverage'
      }
    }
  }
}