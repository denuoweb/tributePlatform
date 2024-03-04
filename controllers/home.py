# Example for home.py
from mountaineer import ControllerBase, RenderBase

class HomeController(ControllerBase):
    url = "/"
    view_path = "/app/home/page.tsx"

    def render(self) -> RenderBase:
        # Data fetching and preparation here
        return RenderBase()
