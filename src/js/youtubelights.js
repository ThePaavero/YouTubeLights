
var YouTubeLights = function() {

	var toggle = false;

	this.init = function()
	{
		doListener();
		setTimeout(removeAnnotations, 5000);
		setTimeout(setHD, 3000);
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
			'position'  : 'relative',
			'z-index'   : 801,
			'box-shadow': '3px 0px 20px 5px #000'
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
		$('#player-api').attr('style', '');
	};

	var removeAnnotations = function()
	{
		$('#movie_player').find('.annotation, svg').remove();
	};

	var setHD = function()
	{
		$('.ytp-button').each(function()
		{
			if($(this).html().indexOf('720') > -1 || $(this).html().indexOf('1080') > -1)
			{
				$(this).click();
			}
		});
	};

};

// ---------------------------------------------------------------------------

$(function()
{
	var p = new YouTubeLights();
	p.init();
});

// EOF