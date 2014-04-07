from fabric.api import task, local
from fabric.colors import green, red
from fabric.contrib.console import confirm


@task
def run():
    """
    Runs the local development server on port :1234
    """
    local('growl.py --serve -1234 .')


@task
def deploy():
    """
    Deploys the local repo to production through rsync.
    """
    msg = 'Are you sure you want to deploy?'
    if not confirm(msg, default=False):
        print(red('Aborted.'))
        return
    local('growl.py --deploy .')
    print(green('Deployed!'))
