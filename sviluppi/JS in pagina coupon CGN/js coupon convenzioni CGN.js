// nei campi hidden va aggiunto update_processo con valore update_processo
// va impostato id_processo con valore di default a caldaia 
//   si possono togliere dai campi hidden campagna, invio_mail , invio al centralizzatore 

<script type="module">
(function ($) {
    $(function () {
        $.widget("sf.changeCampagna", {
            _create: function () {
                let _this = this
                
                
                $(this.element).on("change", (evt) => {
                    const prodotto = $(evt.target).val().toLowerCase()
                    const form = $(_this.element).closest("form")
                    
                    let suffisso = $(form).find("[name='iniziativaSuffisso']").val()
                    // let campagnaStringa = $(form).find("[name='campagnaStringa']").val()
                    const target = $(form).find("[name='id_processo']").val(prodotto == 'clima' ? 'climatizzatore-coupon' : 'caldaia-coupon')

                    $(form).find("[name='iniziativa']").val(suffisso + prodotto)//--//
                    // $(form).find("[name='campagna']").val(campagnaStringa.replace("&&&", prodotto.charAt(0).toUpperCase() + prodotto.slice(1)))
                    $(form).find("[name='product_Type__c']").val(prodotto == 'clima' ? 'Climatizzatore' : 'Caldaia')
                    console.log('ok idProcesso');

                    // window.dispatchEvent(new CustomEvent('update_processo', {detail: {process: target.value}}))
                    window.dispatchEvent(new CustomEvent('update_processo', {
                        detail: {
                            process: (prodotto === 'clima' ? 'climatizzatore-coupon' : 'caldaia-coupon')
                        }
                    })); 
                        
                    })

                
                
                
            },
        });

        //pln.target(e, target, 'close');

        let interval = setInterval(() => {
            if ($('#tipologiaProdotto-input').length > 0) {
                $('#tipologiaProdotto-input').changeCampagna();

                clearInterval(interval)
            }
        }, 1000)
    })
})(jQuery);
</script>