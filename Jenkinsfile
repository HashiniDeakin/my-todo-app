pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                echo '🚀 Building the application...'
                bat 'npm run build'
                echo '✅ Build completed!'
            }
        }
        
        stage('Test') {
            steps {
                echo '🧪 Running tests...'
                bat 'npm test'
                echo '✅ Tests completed!'
            }
        }
        
        stage('Code Quality') {
            steps {
                echo '🔍 Running code quality checks...'
                bat 'npm run lint'
                echo '✅ Code quality check completed!'
            }
        }

        stage('Security') {
            steps {
                echo '🔒 Running security analysis...'
                bat 'npm run security'
                echo '✅ Security analysis completed!'
            }
        }
    }
    
    post {
        always {
            echo '🎉 Pipeline execution completed!'
        }
    }
}
