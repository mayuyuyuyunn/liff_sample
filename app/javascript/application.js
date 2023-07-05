// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
// turboをoffにする
Turbo.session.drive = false;
