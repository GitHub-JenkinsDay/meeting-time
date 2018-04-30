#!groovy

node {
    //def nodeHome = tool name: 'NodeJS', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
    //env.PATH = "${nodeHome}/bin:${env.PATH}"

    if  (env.BRANCH_NAME != 'master') {
        checkout()
        build()
        unitTest()
        preview()
    } // master branch / production
    else {
        checkout()
        build()
        preProduction()
        unitTest()
        // manualPromotion()
        // production()
    }
}

def checkout () {
    stage 'Checkout code'
    checkout scm
}

def build () {
    stage 'check environment'
    sh "node -v"
    sh "npm -v"

    stage 'Build'
    // install node modules
    sh 'npm install'
}


def unitTest() {
    stage 'Unit tests'
    sh 'npm test'
    if (currentBuild.result == "UNSTABLE") {
        sh "exit 1"
    }
}

def preview() {
    stage name: 'Deploy to Preview environment', concurrency: 1
}

def preProduction() {
    stage name: 'Deploy to Pre-Production', concurrency: 1
}

def manualPromotion() {
  stage 'Manual Promotion'
  input message: "Does Pre-Production look good?"
}

def production() {
    stage name: 'Deploy to Production', concurrency: 1
    herokuDeploy 'pacific-harbor-82294'
}
