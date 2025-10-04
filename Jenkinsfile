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

        stage('Deploy') {
            steps {
                echo '🚀 Deploying to test environment...'
                bat 'npm run deploy'
                echo '✅ Deployment completed!'
            }
        }

       stage('Release') {
            steps {
                echo '🏷️ Promoting to production...'
                bat 'npm run release'
                echo '✅ Release completed!'
            }
        }

                stage('Monitoring') {
            steps {
                echo '📊 Setting up monitoring...'
                bat 'npm run monitor'
                echo '✅ Monitoring activated!'
            }
        }
    }
    
    post {
        always {
            echo '🎉 Pipeline execution completed!'
        }
    }
}
