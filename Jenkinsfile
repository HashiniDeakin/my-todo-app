pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                echo '🚀 Building the application...'
                sh 'npm run build'
                echo '✅ Build completed!'
            }
        }
        
        stage('Test') {
            steps {
                echo '🧪 Running tests...'
                sh 'npm test'
                echo '✅ Tests completed!'
            }
        }
        
        stage('Code Quality') {
            steps {
                echo '🔍 Running code quality checks...'
                sh 'npm run lint'
                echo '✅ Code quality check completed!'
            }
        }
    }
    
    post {
        always {
            echo '🎉 Pipeline execution completed!'
        }
    }
}
