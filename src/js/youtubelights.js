
var YouTubeLights = function() {

	var toggle = false;

	this.init = function()
	{
		doListener();
	};

	var doListener = function()
	{
		var trigger = $('#player');

		trigger.css('cursor', 'pointer');
		trigger.attr('title', 'Doubleclick here to dim page');
		trigger.dblclick(function()
		{
			toggleDim();
			return false;
		});
	};

	var toggleDim = function()
	{
		if(toggle === true)
		{
			unDim();
		}
		else
		{
			dim();
		}

		toggle = toggle ? false : true;

		return false;
	};

	var dim = function()
	{
		$('body').prepend('<div id="youtube_dimmer"></div>');

		$('#youtube_dimmer').css({
			'background': '#000',
			'position'  : 'fixed',
			'top'       : 0,
			'left'      : 0,
			'width'     : '100%',
			'height'    : '100%',
			'opacity'   : '0.9',
			'z-index'   : 800
		});

		$('#player-api').css({
			'position': 'relative',
			'z-index' : 801
		});

		$('#movie_player').focus();

		$('#youtube_dimmer').click(function()
		{
			unDim();
			return false;
		});
	};

	var unDim = function()
	{
		$('#youtube_dimmer').remove();
	};

};

// ---------------------------------------------------------------------------

$(function()
{
	var p = new YouTubeLights();
	p.init();
});

// EOF