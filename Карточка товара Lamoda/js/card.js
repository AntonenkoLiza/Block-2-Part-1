$(function(){
$("img.gallery-preview").mouseenter(function(e){
	let src = $(this).attr("data-zoom");		
	$('.gallery-fullsize img').attr('src',src);

	});
		let col = 0;
		$('.amount-plus').click(function(e){
			if(col >= 0){
				col++;
			}
			$(this).next().html(col);	
		});
		$('.amount-minus').click(function(e){
			
			if( col > 0){
				col--;
			}
			$(this).prev().html(col);
		});
		$('button[name="Buy"]').click(function(){
			if(col==1) {
				$.ambiance({message: `В корзину добавлен ${col} товар`,
            	width: 300,
            	type: "custom",
            	timeout: 5});
			} else if(col>=2 && col<=4) {
				$.ambiance({message: `В корзину добавлено ${col} товара`,
            	width: 300,
            	type: "custom",
            	timeout: 5});
			} else if(col!=0){
				$.ambiance({message: `В корзину добавлено ${col} товаров`,
            	width: 300,
            	type: "custom",
            	timeout: 5});
			}
		});
});