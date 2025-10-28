import { defineRule, configure } from 'vee-validate';
import * as rules from '@vee-validate/rules';
import {localize} from "@vee-validate/i18n";

type Validator = Parameters<typeof defineRule>[1];

export default defineNuxtPlugin(() => {
    for (const [rule, validator] of Object.entries(rules)) {
        if (typeof validator === 'function') {
            defineRule(rule, validator as Validator);
        }
    }

    configure({
        generateMessage: localize('ru', {
            messages: {
                required: 'Поле обязательно для заполнения',
                min: 'Минимальная длина 0:{{min}'
            }
        })
    })
});
