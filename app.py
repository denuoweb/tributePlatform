from mountaineer.app import AppController
from controllers.home import HomeController
from controllers.art import ArtController
from controllers.dedication import DedicationController
from controllers.book import BookController
from mountaineer.js_compiler.postcss import PostCSSBundler

controller = AppController(
    view_root="views",
    custom_builders=[
        PostCSSBundler(),
    ],
)

controller.register(HomeController())
controller.register(ArtController())
controller.register(DedicationController())
controller.register(BookController())
