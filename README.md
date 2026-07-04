# CloudPipe Deploy

Automated CI/CD pipeline that deploys a static website to AWS S3 using GitHub Actions and CloudFormation.

## Architecture

```
Developer → GitHub → GitHub Actions → AWS S3 → Live Website
```

## AWS Services Used
- **S3** — Static website hosting
- **CloudFormation** — Infrastructure as Code
- **IAM** — Least-privilege access for GitHub Actions

## How It Works
1. Developer pushes code to the `main` branch
2. GitHub Actions automatically triggers
3. Files are synced to the S3 bucket
4. Website updates live in seconds

## Project Structure
```
cloudpipe-deploy/
├── website/
│   ├── index.html
│   ├── css/style.css
│   └── js/main.js
├── .github/
│   └── workflows/
│       └── deploy.yml
├── infrastructure/
│   └── template.yaml
└── README.md
```

## Setup Instructions
1. Create an S3 bucket using the CloudFormation template
2. Create an IAM user with S3 access
3. Add `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` to GitHub Secrets
4. Push to `main` branch to trigger deployment

## Deployment Process
- Every push to `main` triggers an automatic deployment
- GitHub Actions syncs the `website/` folder to S3
- Deployment completes in under 15 seconds

## Built By
Myles Chumley | [GitHub](https://github.com/MylesChums) | [LinkedIn](https://www.linkedin.com/in/myles-chumley-4a891a179)
