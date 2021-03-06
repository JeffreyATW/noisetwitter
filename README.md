# NoiseTwitter

A sample Angular/Rails app made for the [Front-end Web Development](https://www.noisebridge.net/wiki/Front-end_Web_Development) class at [Noisebridge](https://www.noisebridge.net/).

## Installing

Make sure you have [Git](http://git-scm.com/) and [Ruby](https://www.ruby-lang.org/en/) installed. If these two commands give you version numbers, you're set:

    git --version
    ruby -v

If those commands work fine, then download this repository:

    git clone https://github.com/JeffreyATW/noisetwitter.git
    cd noisetwitter

Then install and run [Bundler](http://bundler.io/):

    gem install bundler
    bundle

If RubyGems cannot install due to lack of privileges, add a `sudo` to the beginning:

    sudo gem install bundler

Finally, set up your local database:

    rake db:migrate db:seed

## Running

    rails s

Then access [http://localhost:3000](http://localhost:3000) in your browser and you should see the app.
