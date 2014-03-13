/**
 * Master application
 * Includes Classes Env, App
 */

window.App = window.App || {};
window.Env = window.Env || {};

(function(App, Env){


    App.ModalWindow = {

        /**
         * Init modal window module
         */
        init: function() {
            this.topbar = document.getElementById('top-bar');
            this.button = document.getElementById('button');
            this.bindEvents();

        },

        /**
         * Show the window
         * @param [Dom Object] modalWindow
         */
        show: function() {
            this.topbar.style.top = '-500px';
        },

        hide: function() {
            this.topbar.style.top = '0px';
        },

        /**
         * Bind global events
         */
        bindEvents: function() {
            var self = this;

            // //when pressing escape
            // document.addEventListener('keydown', function(evnt) {
            //     if (evnt.keyCode == 27) {
            //         self.hide();
            //     }
            // });

            //when clicking the curtain
            this.button.addEventListener('mousedown', function(evnt){
                if(self.topbar.style.top == '0px') {

                    self.show();

                }else {

                    self.hide();
                }
            });
        }
    };

    App.ModalWindow.init();




/* ------------------------------Show More Button-------------------------------- */
 
   App.ShowMoreWindow = {

        /**
         * Init modal window module
         */
        init: function() {

            this.showMoreCallers = document.getElementsByClassName('showMore');
            this.showMoreInfo = document.getElementsByClassName('show-more-divs');
            this.bindEvents();

        },

        
        /**
         * Show the window
         * @param [Dom Object] modalWindow
         */
        show: function(element) {
            //hide the window
            element.style.display = 'block';
        },

        hide: function(element) {
            //close the current opened window
            element.style.display = 'none';
        },

        /**
         * Bind global events
         */
        bindEvents: function() {
            var self = this;

            Array.prototype.forEach.call(this.showMoreCallers, function(element, index) {

                element.addEventListener('mousedown', function(evnt) {

                    if(self.showMoreInfo[index].style.display == 'block') {

                        self.hide(self.showMoreInfo[index]);

                    }else {

                        self.show(self.showMoreInfo[index]);
                    }
                });

            });


            
        }
    };

    App.ShowMoreWindow.init();




/* ------------------------------Star Rating-------------------------------- */


// var imgs=document.getElementById('user-rating-box').getElementsByTagName('img');
//  for (i = 0; i < imgs.length; i++) {
//       imgs[i].addEventListener("mouseover", function(e) {
//          setRating(parseInt(e.target.alt))
//       }, false)
//       imgs[i].addEventListener("mouseout", function(e) {
//          resetRating(parseInt(e.target.alt))
//       }, false)
//       imgs[i].addEventListener("click", function(e) {
//         submitRating (parseInt(e.target.alt))
//      },false)
//  }

//  function setRating(point)
// {
//  stars = new Array("rate1","rate2","rate3","rate4","rate5");
//  start = parseInt(point);
//  for(i=0;i<5;i++)
//  {
//  if(i >= start)
//    document.getElementById(stars[i]).src="img/empty.png";
//  if(i < parseInt(point))
//    document.getElementById(stars[i]).src="img/filled.png";
//  }
// }

// function resetRating(point)
// {
//  stars = new Array("rate1","rate2","rate3","rate4","rate5");
//  start = parseInt(point);
//  for(i=0;i<5;i++)
//  {
//  if(i >= start)
//    document.getElementById(stars[i]).src="img/empty.png";
//  if(i < parseInt(point))
//    document.getElementById(stars[i]).src="img/empty.png";
//  }
// }

// function submitRating(point)
// {
//  stars = new Array("rate1","rate2","rate3","rate4","rate5");
//  this.document.getElementById(stars[i]).class="current";
// for(i=0;i<5;i++)
//  {
//  if(i >= start)
//    document.getElementById(stars[i]).src="img/empty.png";
//  if(i < parseInt(point))
//    document.getElementById(stars[i]).src="img/filled.png";
//  }
 
// }


App.init = function() {
        var self = this;

        this.ratingBox = document.getElementsByClassName('raiting')[0];
        this.stars = this.ratingBox.getElementsByClassName('star');

        Array.prototype.forEach.call(this.stars, function(element, index){

            element.addEventListener('click', function(evnt){

                var selected = self.ratingBox.getElementsByClassName('star-active');

                if(selected.length) {
                    selected[0].classList.remove('star-active');
                }

                this.classList.add('star-active');

            });

        });

    };


    App.init = App.init.bind(App);

    document.addEventListener('DOMContentLoaded', App.init);


/* ------------------------------Drop Down Menu-------------------------------- */

App.DropDownMenu = {

        /**
         * Init modal window module
         */
        init: function() {

            this.dropDownCallers = document.getElementsByClassName('mainNavItem');
            this.dropDownItem = document.getElementsByClassName('dropdown-menu-wrap');
            this.bindEvents();

        },

        
        /**
         * Show the window
         * @param [Dom Object] modalWindow
         */
        show: function(element) {
            //hide the window
            element.style.display = 'block';
        },

        hide: function(element) {
            //close the current opened window
            element.style.display = 'none';
        },

        /**
         * Bind global events
         */
        bindEvents: function() {
            var self = this;

            Array.prototype.forEach.call(this.dropDownCallers, function(element, index) {

                element.addEventListener('mousedown', function(evnt) {
                    if(self.dropDownItem[index].style.display == 'block') {

                        self.hide(self.dropDownItem[index]);

                    }else {

                        self.show(self.dropDownItem[index]);
                    }
                });
            });
        }
    };

    App.DropDownMenu.init();


})(Env, App);