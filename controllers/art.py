# Corrected example for art.py
from mountaineer import ControllerBase, RenderBase

class ArtController(ControllerBase):  # Corrected class name here
    url = "/art"
    view_path = "/app/art/page.tsx"

    def render(self) -> RenderBase:
        # Data fetching and preparation here
        return RenderBase()
