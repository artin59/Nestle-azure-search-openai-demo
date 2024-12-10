<!--
---
name: RAG chat app with your data (Python)
description: Chat with your domain data using Azure OpenAI and Azure AI Search.
languages:
- python
- typescript
- bicep
- azdeveloper
products:
- azure-openai
- azure-cognitive-search
- azure-app-service
- azure
page_type: sample
urlFragment: azure-search-openai-demo
---
-->

# RAG Nestle chat bot with Azure OpenAI and Azure AI Search (Python)

1. I have included below the given steps to run the chatbot localy.
2. This AI chatbot, uses react for its frontend, and python as its backend, and it is hosted on mictorosft Azure. It also "uses Azure OpenAI Service to access GPT models, and Azure AI Search for data indexing and retrieval", and Azure openAI document Intelligence for getting data from the pdf files.
3. Since I was extremely busy with exams, I wasn't able to implement all the features which i hoped to implement therefore there are some limitations to the project, however, in the future I will be developing a webscraper for the data, and also cleaning up the frontend. Furthermore I will add speech input/output for accessibility.


### Local environment

1. Install the required tools:

    - [Azure Developer CLI](https://aka.ms/azure-dev/install)
    - [Python 3.9, 3.10, or 3.11](https://www.python.org/downloads/)
      - **Important**: Python and the pip package manager must be in the path in Windows for the setup scripts to work.
      - **Important**: Ensure you can run `python --version` from console. On Ubuntu, you might need to run `sudo apt install python-is-python3` to link `python` to `python3`.
    - [Node.js 18+](https://nodejs.org/download/)
    - [Git](https://git-scm.com/downloads)
    - [Powershell 7+ (pwsh)](https://github.com/powershell/powershell) - For Windows users only.
      - **Important**: Ensure you can run `pwsh.exe` from a PowerShell terminal. If this fails, you likely need to upgrade PowerShell.

2. Create a new folder and switch to it in the terminal.
3. Run this command to download the project code:

    ```shell
    azd init -t Nestle-azure-search-openai-demo
    ```

    Note that this command will initialize a git repository, so you do not need to clone this repository.

## Deploying

The steps below will provision Azure resources and deploy the application code to Azure Container Apps. To deploy to Azure App Service instead, follow [the app service deployment guide](docs/azure_app_service.md).

1. Login to your Azure account:

    ```shell
    azd auth login
    ```

    For GitHub Codespaces users, if the previous command fails, try:

   ```shell
    azd auth login --use-device-code
    ```

1. Create a new azd environment:

    ```shell
    azd env new
    ```

    Enter a name that will be used for the resource group.
    This will create a new folder in the `.azure` folder, and set it as the active environment for any calls to `azd` going forward.
1. (Optional) This is the point where you can customize the deployment by setting environment variables, in order to [use existing resources](docs/deploy_existing.md), [enable optional features (such as auth or vision)](docs/deploy_features.md), or [deploy to free tiers](docs/deploy_lowcost.md).
1. Run `azd up` - This will provision Azure resources and deploy this sample to those resources, including building the search index based on the files found in the `./data` folder.
    - **Important**: Beware that the resources created by this command will incur immediate costs, primarily from the AI Search resource. These resources may accrue costs even if you interrupt the command before it is fully executed. You can run `azd down` or delete the resources manually to avoid unnecessary spending.
    - You will be prompted to select two locations, one for the majority of resources and one for the OpenAI resource, which is currently a short list. That location list is based on the [OpenAI model availability table](https://learn.microsoft.com/azure/cognitive-services/openai/concepts/models#model-summary-table-and-region-availability) and may become outdated as availability changes.
1. After the application has been successfully deployed you will see a URL printed to the console.  Click that URL to interact with the application in your browser.
It will look like the following:

!['Output from running azd up'](docs/images/endpoint.png)

> NOTE: It may take 5-10 minutes after you see 'SUCCESS' for the application to be fully deployed. If you see a "Python Developer" welcome screen or an error page, then wait a bit and refresh the page.

### Deploying again

If you've only changed the backend/frontend code in the `app` folder, then you don't need to re-provision the Azure resources. You can just run:

```shell
azd deploy
```

If you've changed the infrastructure files (`infra` folder or `azure.yaml`), then you'll need to re-provision the Azure resources. You can do that by running:

```shell
azd up
```

## Running the development server

You can only run a development server locally **after** having successfully run the `azd up` command. If you haven't yet, follow the [deploying](#deploying) steps above.

1. Run `azd auth login` if you have not logged in recently.
2. Start the server:

  Windows:

  ```shell
  ./app/start.ps1
  ```

  Linux/Mac:

  ```shell
  ./app/start.sh
  ```

  VS Code: Run the "VS Code Task: Start App" task.

It's also possible to enable hotloading or the VS Code debugger.
See more tips in [the local development guide](docs/localdev.md).